import Avatar from '../img/myself.png';

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Marcos Vitor" />
      <p className="title">Dev & analista de sistemas web (jr)</p>
      <SocialNetworks/>
      <InformationContainer/>
    
      <a href="./curriculoMarcos.pdf"  download="curriculoMarcos.pdf" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar