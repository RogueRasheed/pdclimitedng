"use client";

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, onSnapshot, orderBy, Timestamp } from 'firebase/firestore';
import { 
  FormatQuote as QuoteIcon, Star as StarIcon, 
  VerifiedUser as VerifiedIcon, AddComment as AddCommentIcon, Close as CloseIcon 
} from '@mui/icons-material';


interface Review {
  id?: string;
  clientName: string;
  company: string;
  quote: string;
  rating: number;
  createdAt?: Timestamp | Date | null;
  approved?: boolean;
}



const TestimonialsAndFeedback = () => {
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState<Review>({ clientName: '', company: '', quote: '', rating: 5 });

  // 1. LIVE DATA: Get only APPROVED reviews from Firebase
  useEffect(() => {
    const q = query(
      collection(db, "pdc_reviews"), 
      // where("approved", "==", true), // Uncomment this line after you've approved a few!
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewsData = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as Review));
      setTestimonials(reviewsData);
    });

    return () => unsubscribe();
  }, []);

  // 2. SUBMIT DATA: Push to Firebase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "pdc_reviews"), {
        ...newReview,
        createdAt: new Date(),
        approved: true // Keeping it TRUE for now so you can see it work immediately!
      });
      
      setNewReview({ clientName: '', company: '', quote: '', rating: 5 });
      setIsFormOpen(false);
      alert("Success! Your review is now live on the PDC Ltd website.");
    } catch (err) {
      console.error("Firebase Error:", err);
      alert("Something went wrong. Please check your internet connection.");
    }
  };

  return (
    <section className="bg-slate-50 py-24 px-6 lg:px-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Button */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <VerifiedIcon sx={{ fontSize: 18 }} />
              Client Feedback
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">Trusted by Industry Leaders</h2>
          </div>
          <button onClick={() => setIsFormOpen(true)} className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-amber-500 transition-colors flex items-center gap-2 shadow-lg">
            <AddCommentIcon /> Leave a Review
          </button>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.length > 0 ? testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-md transition-all">
              <QuoteIcon sx={{ fontSize: 60, color: '#f59e0b', opacity: 0.1 }} className="absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => <StarIcon key={i} sx={{ fontSize: 18, color: '#f59e0b' }} />)}
              </div>
              <p className="text-slate-600 italic mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t pt-4">
                <h4 className="font-bold text-slate-900">{t.clientName}</h4>
                <p className="text-amber-600 text-[10px] font-bold uppercase tracking-widest">{t.company}</p>
              </div>
            </div>
          )) : (
            <p className="text-slate-400 italic">No reviews yet. Be the first to leave one!</p>
          )}
        </div>
      </div>

      {/* Form Modal (Same as previous design, just linked to handleSubmit) */}
      {isFormOpen && (
        <div className="fixed inset-0 z-100 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl">
             <button onClick={() => setIsFormOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-amber-500 transition-colors"><CloseIcon /></button>
             <h3 className="text-2xl font-bold text-slate-900 mb-6">Submit Your Feedback</h3>
             <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input required value={newReview.clientName} onChange={(e)=>setNewReview({...newReview, clientName: e.target.value})} className="bg-slate-50 border p-3 rounded-lg text-slate-900" placeholder="Your Name" />
                  <input required value={newReview.company} onChange={(e)=>setNewReview({...newReview, company: e.target.value})} className="bg-slate-50 border p-3 rounded-lg text-slate-900" placeholder="Company" />
                </div>
                <select value={newReview.rating} onChange={(e)=>setNewReview({...newReview, rating: Number(e.target.value)})} className="w-full bg-slate-50 border p-3 rounded-lg text-amber-600 font-bold">
                  <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                  <option value={3}>⭐⭐⭐ (3 Stars)</option>
                </select>
                <textarea required rows={4} value={newReview.quote} onChange={(e)=>setNewReview({...newReview, quote: e.target.value})} className="w-full bg-slate-50 border p-3 rounded-lg text-slate-900" placeholder="Your experience..." />
                <button type="submit" className="w-full bg-amber-500 text-white font-bold py-4 rounded-xl hover:bg-slate-900 transition-colors">Post Feedback</button>
             </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsAndFeedback;