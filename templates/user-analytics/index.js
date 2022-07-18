import React, { useContext, useEffect, useState } from "react";
import PhysiologicalSummary from "./user-report-sections/physiological-summary";
import ErrorSection from "./user-report-sections/error-section";
import TimeSection from "./user-report-sections/time-section";
import SummaryOfErrors from "./user-report-sections/summary-of-errors";
import ErrorOfTimeTaken from "./user-report-sections/error-and-time-taken";
import LiveHeartRate from "./user-report-sections/live-heart-rate";
import PersonalityProfile from "./user-report-sections/personality-profile";
import BehaviourChart from "./user-report-sections/behaviour-chart";
import PriorityTable from "./user-report-sections/priority-table";
import ItrationSummary from "./user-report-sections/itration-summary";
import RelationalDataSummary from "./user-report-sections/relational-data-summary";
import AffectAssesment from "./user-report-sections/affect-assesment";
import { getLastElementId } from "../../utils/helper-functions";
import AppContext from "../../appContext";
import { useRouter } from "next/router";
import { getUserProjectReportApi, onUserProjectPriorityReport, onUserProjectSummeryError, onUserProjectSummeryReport } from "../../utils/api-Request";
import { toast } from "react-toastify";

const UserAnalyticsProjectReport = () => {
  const apiContext = useContext(AppContext)
  const router = useRouter()
  const user = apiContext.state?.user?.data?.data;
  const projectId = router?.query?.projectId;
  const [page, setPage] = useState(1);
  const [behaviourChart, setBehaviourChart] = useState({});
  const [limit, setLimit] = useState(1000000);
  const [search, setSearch] = useState("");
  const [notDatafound, setNotDatafound] = useState(false);
  const [_userProjectReport, setUserProjectReport] = useState(null);
  const [userProjectReportSummeryError, setUserProjectReportSummeryError] = useState(null) 
  const [PriorityTableData, setPriorityTableData] = useState(null)
  const [_userProjectReportSummery, setUserProjectReportSummery] = useState(null)

  const Iteration = _userProjectReport?.IterationDropDown;
  let defaultIterationValue = Iteration?.[Iteration?.length - 1];

  

  const handleSummaryErrorAPI = async(sessionId) => {     
    if(user?.id && projectId) 
      try {
        const res = await onUserProjectSummeryError({projectId, userId:user.id, sessionId})
        setUserProjectReportSummeryError(res.data.data)
      } catch (error) {
        toast.error("Something went wrong.")
      }
  }
  const handlePriorityAPI = async(sessionId) => {   
    if(user?.id && projectId)  
    try {
      const res = await onUserProjectPriorityReport({projectId, userId:user.id, sessionId})
      setPriorityTableData(res.data.data)
    } catch (error) {
      toast.error("Something went wrong.")
    }
  }
  const handleIterationSummary = async(type) => {
    if(user?.id && projectId)  
    try {
      const res = await onUserProjectSummeryReport({projectId, userId:user.id, type:type.toLowerCase()})
      setUserProjectReportSummery(res.data.data)
    } catch (error) {
      toast.error("Something went wrong.")
    }
  }

  const handleProjectReport = async () => {
    try {
      const data = await getUserProjectReportApi(user.id, projectId)
      setUserProjectReport(data.data.data || null) 
    } catch (error) {
      toast.error("Something went wrong.")
    }
  }


  useEffect(() => {
    handleIterationSummary("Error")
    handleSummaryErrorAPI(defaultIterationValue?.id)
    handlePriorityAPI(defaultIterationValue?.id)
  }, [defaultIterationValue])
  


  useEffect(() => {
   if(Boolean(user?.id) && Boolean(projectId)){
    handleProjectReport()
   }
  }, [user, projectId])


  useEffect(() => {  
    setBehaviourChart(_userProjectReport?.behaviourChart);
  }, [_userProjectReport]);


  if (notDatafound) {
    return (<div className="container">
      <div className="card p-4">No Data found</div>
    </div>)
  }


  return (
    <div className="container py-4">
      <div className="row">
        <PhysiologicalSummary
          maxTimeTakingTask={_userProjectReport?.maxTimeTakingTask}
          maxTaskError={_userProjectReport?.maxTaskError}
          lastintertion={_userProjectReport?.lastintertion}
          last10intertion={_userProjectReport?.last10intertion}
        />
        <ErrorSection
          avgError={_userProjectReport?.avgError}
          finalErrorResult={_userProjectReport?.finalErrorResult}
        />
        <TimeSection
          imprInTimeEfficiency={_userProjectReport?.imprInTimeEfficiency}
          AVGTimeTaken={_userProjectReport?.avgTimeTaken}
        />
      </div>

      <div className="row">
        <SummaryOfErrors
          defaultIterationValue={defaultIterationValue}
          IterationDropDown={Iteration}
          handleSummaryErrorAPI={handleSummaryErrorAPI}
          userProjectReportSummeryError={userProjectReportSummeryError}
        />
        <ErrorOfTimeTaken />
      </div>

      <div className="row">
        <LiveHeartRate />
      </div>

      <div className="row">
        <PersonalityProfile
          personalityProfile={_userProjectReport?.personalityProfile}
        />
      </div>

      <div className="row">
        <BehaviourChart
          motivation={behaviourChart?.motivation}
          attitude={behaviourChart?.attitude}
          valueAndEthics={behaviourChart?.valuesandEthics}
        />
      </div>
      <div className="row">
        <PriorityTable
          defaultIterationValue={defaultIterationValue}
          handlePriorityAPI={handlePriorityAPI}
          IterationDropDown={Iteration}
          PriorityTableData={PriorityTableData}
        />
      </div>
      <div className="row">
        <ItrationSummary
          handleIterationSummary={handleIterationSummary}
          IterationDropDown={Iteration}
          _userProjectReportSummery={_userProjectReportSummery}
        />
        <AffectAssesment IterationDropDown={Iteration} />
      </div>
      <div className="row">
        <RelationalDataSummary />
      </div>
    </div>

  );
};

export default UserAnalyticsProjectReport;
