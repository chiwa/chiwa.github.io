export type Photo = {
  src: string
  alt: string
  width: number
  height: number
  position?: string
}

export type JourneyEntry = {
  id: string
  title: string
  organization?: string
  period?: string
  description: string
}

type GalleryEntry = {
  title: string
  category: string
  photo: Photo
}

type Project = {
  name: string
  format: string
  description: string
  motif: 'code' | 'orbit'
  url?: string
  action?: string
}

const galleryPhoto = (src: string, alt: string): Photo => ({
  src: `/images/${src}.webp`,
  alt,
  width: 640,
  height: 600,
})

export const portfolio = {
  name: 'Chiwa Kantawong',
  initials: 'CK',
  role: 'Technical Lead | Senior Software Engineer',
  headline: 'More Than a Software Engineer.',
  tagline: 'Building technology. Building teams. Building myself.',
  introduction: 'I’m Chiwa Kantawong, a technical lead and senior software engineer. I design software systems and help teams build them with care.',
  experience: '20+',
  about: [
    'I bring over 20 years of software development experience to technical leadership and software architecture. I enjoy the work of turning a complex problem into a design that a team can build, explain, and maintain.',
    'I’m drawn to technology that helps people work better. Continuous learning and personal development keep me curious, whether I’m studying a new engineering practice or working on something outside of software.',
  ],
  links: {
    github: 'https://github.com/chiwa',
    linkedin: 'https://www.linkedin.com/in/chiwa/',
    email: 'kchiwa@gmail.com',
    cv: '/cv/chiwa-kantawong-profile.pdf',
    cvIsProfile: true,
  },
  profilePhoto: null as Photo | null,
  technical: [
    { title: 'Backend engineering', skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs'] },
    { title: 'Architecture & design', skills: ['System Design', 'Software Architecture', 'Kafka'] },
    { title: 'Cloud & delivery', skills: ['AWS', 'Docker', 'CI/CD', 'AI-Assisted Development'] },
  ],
  leadership: [
    { title: 'Digital Transformation', description: 'Connect modernization decisions to the needs of the business and the people using the software.' },
    { title: 'Engineering Practices', description: 'Develop habits around design, review, and delivery that teammates can apply consistently.' },
    { title: 'Software Quality', description: 'Make reliability and maintainability part of everyday engineering decisions.' },
    { title: 'Technical Mentoring', description: 'Help engineers build confidence through feedback, questions, and shared problem-solving.' },
    { title: 'Architecture and Technical Decision Making', description: 'Make trade-offs explicit and give the team context for the decisions it will inherit.' },
    { title: 'Development Process Improvement', description: 'Identify friction in the development cycle and make changes the team can evaluate and sustain.' },
  ],
  journey: [
    { id: 'recent', title: 'Most recent chapter', description: 'Role, organization, dates, and scope to be added.' },
    { id: 'earlier', title: 'Earlier chapter', description: 'Previous roles and selected milestones to be added.' },
  ] as JourneyEntry[],
  education: {
    degree: 'Master’s degree in Information Technology',
    focus: 'Database Systems',
    gpa: '3.72',
  },
  galleryIsIllustrative: true,
  gallery: [
    { title: 'At work', category: 'Professional life', photo: galleryPhoto('professional/workspace', 'Laptop on a desk beside a city window') },
    { title: 'In the gym', category: 'Fitness & weight training', photo: galleryPhoto('fitness/training', 'Black dumbbells on a gym floor') },
    { title: 'Always learning', category: 'Continuous learning', photo: galleryPhoto('lifestyle/learning', 'Open book and notebook under a lamp') },
    { title: 'Exploring technology', category: 'Technology exploration', photo: galleryPhoto('professional/technology', 'Blue-lit circuit board with amber details') },
    { title: 'Everyday moments', category: 'Lifestyle', photo: galleryPhoto('lifestyle/everyday', 'Coffee beside a window overlooking the city at twilight') },
  ] as GalleryEntry[],
  projects: [
    { name: 'Thai Java Zone', format: 'Software engineering & Java', description: 'Educational videos about Java and the engineering decisions behind everyday software development.', motif: 'code', url: 'https://www.youtube.com/@ThaiJavaZone', action: 'Watch on YouTube' },
    { name: 'Mamase Podcast', format: 'Science, space & technology', description: 'A podcast about scientific ideas, space, and the technology that helps us explore both.', motif: 'orbit' },
  ] as Project[],
}
