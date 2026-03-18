import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Emergency from './pages/Emergency';
import Booking from './pages/Booking';

import PatientInfo from './pages/PatientInfo';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';

import DemoSuite from './pages/demo/DemoSuite';
import NoShowSystem from './pages/demo/NoShowSystem';
import CostEstimator from './pages/demo/CostEstimator';
import InsurancePrecheck from './pages/demo/InsurancePrecheck';
import MembershipSystem from './pages/demo/MembershipSystem';
import EmergencyTriage from './pages/demo/EmergencyTriage';
import LeadScoring from './pages/demo/LeadScoring';
import DemoPatients from './pages/demo/DemoPatients';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* SEO-Clean Services Routing */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/implants" element={<div className="p-8 max-w-7xl mx-auto">Implants</div>} />
            <Route path="/services/invisalign" element={<div className="p-8 max-w-7xl mx-auto">Invisalign</div>} />
            <Route path="/services/whitening" element={<div className="p-8 max-w-7xl mx-auto">Whitening</div>} />
            <Route path="/services/emergency" element={<Navigate to="/emergency" replace />} />

            {/* Top-Level High Priority Pages */}
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/patient-info" element={<PatientInfo />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Internal Demo Suite (Hidden from Nav/Search) */}
            <Route path="/demo-suite" element={<DemoSuite />} />
            <Route path="/demo-no-show-system" element={<NoShowSystem />} />
            <Route path="/demo-cost-estimator" element={<CostEstimator />} />
            <Route path="/demo-insurance-precheck" element={<InsurancePrecheck />} />
            <Route path="/demo-membership-system" element={<MembershipSystem />} />
            <Route path="/demo-emergency-triage" element={<EmergencyTriage />} />
            <Route path="/demo-lead-scoring" element={<LeadScoring />} />
            <Route path="/demo-patients" element={<DemoPatients />} />

            {/* SEO Catch-All for 404s to prevent messy crawling */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
