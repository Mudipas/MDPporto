import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/App.css';

const icons = {
  email: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{verticalAlign:'middle',marginRight:8}}><rect width="24" height="24" rx="6" fill="#3be88a"/><path d="M6 8.5l6 5 6-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="8" width="12" height="8" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
  ),
  phone: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{verticalAlign:'middle',marginRight:8}}><rect width="24" height="24" rx="6" fill="#3be88a"/><path d="M7 7c.5 3.5 3.5 6.5 7 7l2-2c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-1.5 1.5c-.7.7-1.7 1-2.7.7-2.7-.7-5.7-3.7-6.4-6.4-.3-1 .1-2 .7-2.7L7.3 7c.2-.2.5-.2.7 0z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/></svg>
  ),
  address: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{verticalAlign:'middle',marginRight:8}}><rect width="24" height="24" rx="6" fill="#3be88a"/><path d="M12 21s-6-5.2-6-10A6 6 0 0118 11c0 4.8-6 10-6 10z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="11" r="2.5" stroke="#fff" strokeWidth="1.5"/></svg>
  ),
  instagram: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{verticalAlign:'middle',marginRight:8}}><rect width="24" height="24" rx="6" fill="#3be88a"/><rect x="7" y="7" width="10" height="10" rx="3" stroke="#fff" strokeWidth="1.5"/><circle cx="12" cy="12" r="2.5" stroke="#fff" strokeWidth="1.5"/><circle cx="16" cy="8" r="1" fill="#fff"/></svg>
  ),
  linkedin: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{verticalAlign:'middle',marginRight:8}}><rect width="24" height="24" rx="6" fill="#3be88a"/><rect x="7" y="9" width="2" height="6" rx="1" fill="#fff"/><rect x="11" y="11" width="2" height="4" rx="1" fill="#fff"/><rect x="15" y="10" width="2" height="5" rx="1" fill="#fff"/><circle cx="8" cy="7" r="1" fill="#fff"/></svg>
  ),
};

const ContactSection = ({ isActive }) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    import('../data/content.json').then(setContent).catch(() => setContent(null));
  }, []);
  const c = (content && content.contact) || {};
  return (
    <section id="contact" style={{ scrollMarginTop: '90px' }}>
      <Card className={isActive ? 'profile-active-border' : ''}>
        <h2>Kontak</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>{icons.email}<b>Email:</b> {c.email || '-'}</li>
          <li>{icons.phone}<b>Telepon:</b> {c.phone || '-'}</li>
          <li>{icons.address}<b>Alamat:</b> {c.address || '-'}</li>
          <li>{icons.instagram}<b>Instagram:</b> {c.instagram || '-'}</li>
          <li>{icons.linkedin}<b>LinkedIn:</b> {c.linkedin || '-'}</li>
        </ul>
      </Card>
    </section>
  );
};

export default ContactSection;
