import Hero from './components/Hero.jsx';
import Overview from './components/Overview.jsx';
import DeskResearch from './components/DeskResearch.jsx';
import ResearchFinding from './components/ResearchFinding.jsx';
import Problem from './components/Problem.jsx';
import Persona from './components/Persona.jsx';
import Insight from './components/Insight.jsx';
import ProjectGoal from './components/ProjectGoal.jsx';
import InformationArchitecture from './components/InformationArchitecture.jsx';
import Wireframe from './components/Wireframe.jsx';
import Solution from './components/Solution.jsx';
import MVPFlow from './components/MVPFlow.jsx';
import KeyFeatures from './components/KeyFeatures.jsx';
import VisualSystem from './components/VisualSystem.jsx';
import ServiceConcept from './components/ServiceConcept.jsx';
import Takeaway from './components/Takeaway.jsx';

export default function App() {
  return (
    <main>
      <Hero />
      <Overview />
      <DeskResearch />
      <ResearchFinding />
      <Persona />
      <Problem />
      <Insight />
      <ProjectGoal />
      <InformationArchitecture />
      <Wireframe />
      <VisualSystem />
      <ServiceConcept />
      <Solution />
      <MVPFlow />
      <KeyFeatures />
      <Takeaway />
    </main>
  );
}
