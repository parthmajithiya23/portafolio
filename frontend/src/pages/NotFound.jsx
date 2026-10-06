import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import './NotFound.css'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page not found" description="The page you're looking for doesn't exist." />
      <section className="section not-found">
        <div className="container center-col">
          <span className="not-found__code gradient-text">404</span>
          <h1 className="section-title">This page took a wrong turn.</h1>
          <p className="section-desc">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have
            moved.
          </p>
          <div className="hero__actions" style={{ justifyContent: 'center', marginTop: 28 }}>
            <Link to="/" className="btn btn-primary">
              <Home /> Back Home
            </Link>
            <Link to="/projects" className="btn btn-outline">
              <ArrowLeft /> View Projects
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
