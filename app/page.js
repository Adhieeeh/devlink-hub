'use client';

import React, { useState } from 'react';

export default function DevLinkHub() {

  const [links, setLinks] = useState([
    { id: 1, title: "✒️ DevSign Badges", url: "https://github.com/Adhieeeh/devsign-generator", tech: "React" },
    { id: 2, title: "🚀 QuickRepo Blueprint", url: "https://github.com/Adhieeeh/quickrepo-builder", tech: "Vite" },
    { id: 3, title: "📈 DevLog Tracker", url: "https://github.com/Adhieeeh/devlog-tracker", tech: "LocalStorage" },
    { id: 4, title: "⏱️ DevTime Ledger", url: "https://github.com/Adhieeeh/devtime-tracker", tech: "ContextAPI" }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newTech, setNewTech] = useState('');

  const handleAddLink = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    const freshLink = {
      id: Date.now(),
      title: newTitle,
      url: newUrl.startsWith('http') ? newUrl : `https://${newUrl}`,
      tech: newTech || 'General'
    };

    setLinks([...links, freshLink]);
    setNewTitle('');
    setNewUrl('');
    setNewTech('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'system-ui, sans-serif', color: '#111827' }}>
      
      {/* Profile Header */}
      <div style={{ textAlign: 'center', marginBottom: '35px' }}>
        <img 
          src="profile.jpg" 
          alt="Avatar" 
          style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #4f46e5' }}
        />
        <h1 style={{ margin: '10px 0 5px 0', fontSize: '28px', fontWeight: '800', letterSpacing: '1px' }}>ADHI</h1>
        <p style={{ margin: '0', color: '#4f46e5', fontWeight: '600', fontSize: '14px' }}>⚙️ FULL-STACK LIVE HUB</p>
        
        {/* API Endpoint Badge */}
        <div style={{ marginTop: '12px' }}>
          <a href="/api/links" target="_blank" style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: '20px', fontSize: '12px', color: '#374151', textDecoration: 'none', fontWeight: 'bold' }}>
            🌐 Live JSON API: <span style={{ color: '#2563eb' }}>/api/links</span> ↗
          </a>
        </div>
      </div>

      {/* Dynamic Link Accumulator Stream */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
        {links.map((link) => (
          <a 
            key={link.id} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '18px 24px', 
              backgroundColor: '#ffffff', 
              border: '2px solid #e5e7eb', 
              borderRadius: '14px', 
              textDecoration: 'none', 
              color: '#1f2937',
              fontWeight: '600',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#4f46e5'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <span>{link.title}</span>
            <span style={{ fontSize: '11px', backgroundColor: '#eef2ff', color: '#4f46e5', padding: '4px 10px', borderRadius: '8px', fontWeight: 'bold', uppercase: 'true' }}>{link.tech}</span>
          </a>
        ))}
      </div>

      {/* Form Area: Appending New Links */}
      <form onSubmit={handleAddLink} style={{ backgroundColor: '#f9fafb', padding: '25px', borderRadius: '16px', border: '1px solid #f3f4f6' }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#374151' }}>Add New Live Link Shortcut</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input type="text" placeholder="Link Title (e.g., My Portfolio Website)" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', boxSizing: 'border-box', width: '100%' }} />
          <input type="text" placeholder="URL Target (e.g., github.com/Adhieeeh)" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', boxSizing: 'border-box', width: '100%' }} />
          <input type="text" placeholder="Tech Category Badge (e.g., Next.js)" value={newTech} onChange={(e) => setNewTech(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', boxSizing: 'border-box', width: '100%' }} />
          <button type="submit" style={{ padding: '12px', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '5px' }}>
            Append Link Hub ➕
          </button>
        </div>
      </form>

    </div>
  );
} 