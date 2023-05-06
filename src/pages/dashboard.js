import { RxDashboard } from 'react-icons/rx'
import {DashboardComponent, PageWrapper} from "../components";

const DashBoard = () => {
  return(
  <PageWrapper pageName="Dashboard" Icon={RxDashboard}>
    <DashboardComponent />
  </PageWrapper>
)}

export default DashBoard;