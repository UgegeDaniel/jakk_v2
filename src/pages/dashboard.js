import { RxDashboard } from 'react-icons/rx'
import { DashboardComponent, PageWrapper } from "../components";

const DashBoard = () => {
  return (
    <PageWrapper pageName="Dashboard" Icon={RxDashboard}>
      <div style={{ maxWidth: "80%", margin: "0 auto" }}>
        <DashboardComponent />
      </div>
    </PageWrapper>
  )
}

export default DashBoard;
