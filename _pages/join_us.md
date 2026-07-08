---
layout: page
permalink: /join/
title: Join Us
nav: true
nav_order: 7
navbar_social: true
---

<style>
.post-title { display: none; }
.post-header { display: none; }
.post > article { margin-top: 0 !important; padding-top: 0 !important; }

.join-hero {
  background: linear-gradient(135deg, #0a2a4a 0%, #154360 100%);
  color: #fff;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  margin-bottom: 3rem;
  text-align: center;
}
.join-hero h2 {
  font-size: 1.9rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.8rem;
}
.join-hero p {
  color: #a9cce3;
  max-width: 680px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.75;
}

.position-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}
.position-card {
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.position-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.1);
}
.position-card-header {
  padding: 1.2rem 1.4rem 1rem;
  border-bottom: 1px solid var(--global-divider-color, #e0e0e0);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  list-style: none;
}
.position-card-header::-webkit-details-marker { display: none; }
.position-card-header i {
  font-size: 1.6rem;
  color: #4da6ff;
}
.position-card-header h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
}
.position-card-header::after {
  content: "\276F";
  margin-left: auto;
  font-size: 0.8rem;
  color: var(--global-text-color-light, #999);
  transition: transform 0.2s ease;
}
.position-details[open] > .position-card-header::after { transform: rotate(90deg); }
.position-details:not([open]) > .position-card-header { border-bottom: none; }
.position-card-body {
  padding: 1.2rem 1.4rem 1.4rem;
  font-size: 0.88rem;
  color: var(--global-text-color-light, #555);
  line-height: 1.65;
}
.position-card-body p { margin-bottom: 0.8rem; }
.position-card-body p:last-child { margin-bottom: 0; }
.req-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0.8rem;
}
.req-list li {
  padding: 0.25rem 0 0.25rem 1.2rem;
  position: relative;
  font-size: 0.87rem;
}
.req-list li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #4da6ff;
  font-size: 0.75rem;
  top: 0.3rem;
}

.sec-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  padding-bottom: 0.4rem;
  border-bottom: 3px solid #4da6ff;
  display: inline-block;
}

.contact-box {
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 12px;
  padding: 1.8rem 2rem;
  margin-bottom: 2rem;
}
.contact-box p {
  font-size: 0.93rem;
  color: var(--global-text-color-light, #555);
  line-height: 1.7;
  margin-bottom: 1rem;
}
.contact-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.93rem;
  margin-bottom: 0.5rem;
}
.contact-row i { color: #4da6ff; font-size: 1rem; }
.contact-row a { color: #1a7fff; text-decoration: none; }
.contact-row a:hover { text-decoration: underline; }

.note-box {
  background: rgba(77,166,255,0.07);
  border-left: 4px solid #4da6ff;
  border-radius: 0 8px 8px 0;
  padding: 0.9rem 1.2rem;
  font-size: 0.88rem;
  color: var(--global-text-color, #333);
  margin-bottom: 2rem;
  line-height: 1.6;
}
</style>


<div class="note-box">
  Minority applicants and individuals from underrepresented backgrounds in STEM are highly encouraged to apply. The Xu Lab is committed to fostering a diverse, inclusive, and collaborative research environment.
</div>

<!-- OPEN POSITIONS -->
<div class="sec-title">Open Positions</div>

<div class="position-grid">

  <div class="position-card">
    <details class="position-details">
      <summary class="position-card-header">
        <i class="ti ti-microscope"></i>
        <h3>Postdoctoral Scholars</h3>
      </summary>
      <div class="position-card-body">
        <p>We seek postdoctoral researchers with a strong track record and expertise in one or more of the following areas:</p>
        <ul class="req-list">
          <li>Lipid nanoparticle formulation & characterization</li>
          <li>Nucleic acid therapeutics (mRNA, siRNA, gene editing)</li>
          <li>AI/machine learning for drug delivery</li>
          <li>Organic / medicinal chemistry</li>
          <li>In vivo animal models of cancer or genetic disease</li>
        </ul>
        <p>The ideal candidate is highly motivated, open-minded, creative, and energetic, with a genuine interest in translating novel technologies into clinical investigation.</p>
        <p><strong>To apply:</strong> Email Dr. Xu with subject line <em>"Postdoc Application"</em>. Please include a single PDF with a cover letter, full CV with publication list, up to three representative papers, and contact information for at least three references.</p>
      </div>
    </details>
  </div>

  <div class="position-card">
    <details class="position-details">
      <summary class="position-card-header">
        <i class="ti ti-school"></i>
        <h3>Graduate Students</h3>
      </summary>
      <div class="position-card-body">
        <p>We welcome prospective PhD students interested in conducting research at the interface of chemistry, bioengineering, and medicine. Competitive candidates will have strong academic achievements in:</p>
        <ul class="req-list">
          <li>Chemistry, Pharmaceutical Sciences, or Biochemistry</li>
          <li>Bioengineering or Material Science</li>
          <li>Biology, Medicine, or a closely related discipline</li>
        </ul>
        <p>Candidates must be highly motivated, creative, and open-minded. Minority applicants are highly encouraged to apply.</p>
        <p><strong>To apply:</strong> Email Dr. Xu with subject line <em>"PhD Application"</em> along with your CV and a brief statement of research interests.</p>
      </div>
    </details>
  </div>

  <div class="position-card">
    <details class="position-details">
      <summary class="position-card-header">
        <i class="ti ti-user-star"></i>
        <h3>Undergraduate</h3>
      </summary>
      <div class="position-card-body">
        <p>We offer research opportunities for motivated undergraduate students who wish to gain hands-on experience in cutting-edge biomedical research. Students from all relevant disciplines are welcome, including:</p>
        <ul class="req-list">
          <li>Chemistry, Biology, or Biochemistry</li>
          <li>Biomedical or Chemical Engineering</li>
          <li>Computer Science / Data Science</li>
        </ul>
        <p>Undergraduate researchers will be mentored directly by graduate students and postdocs, with guidance from Dr. Xu.</p>
        <p><strong>To apply:</strong> Email Dr. Xu with subject line <em>"Undergraduate Research"</em> with your CV and a brief description of your interests and availability.</p>
      </div>
    </details>
  </div>

</div>

<!-- CONTACT -->
<div class="sec-title">Contact</div>

<div class="contact-box">
  <p>Interested applicants are encouraged to reach out directly to Dr. Yue Xu. Please use the appropriate subject line noted above so your email is routed correctly.</p>
  <div class="contact-row">
    <i class="ti ti-mail"></i>
    <span>Email: <a href="mailto:yxu@cmh.edu">yxu@cmh.edu</a></span>
  </div>
  <div class="contact-row">
    <i class="ti ti-map-pin"></i>
    <span><a href="https://maps.google.com/?q=2401+Gillham+Rd,+Kansas+City,+MO+64108" target="_blank" rel="noopener">Children's Mercy Research Institute, 2401 Gillham Rd, Kansas City, MO 64108</a></span>
  </div>
</div>
