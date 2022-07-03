import { NoDataFound } from "../../components/NoDataFound/NoDataFound"
import { ImageBaseUrl } from "../../utils/Baseurl"

const TabPanel = ({ projects, percentageData }) => {
    const isCompleted = (id) => {
        const f = Number(percentageData?.find(el => el.projectId == id)?.precentage) >= 100 
        return f
    }

    return (<div className="tabpaneal">
        {projects?.length
            ?
            projects.map((el, i) => {
                return (
                    <div className="learning-historytab" index={i}>
                        <div className="historytablist">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={ImageBaseUrl + (el?.bannerImage || el?.project?.bannerImage)} />
                                </div>
                                <div className="col-md-5">
                                    <div className="historytabcontent">
                                        <p>{el?.projectTitle || el?.project?.projectTitle}</p>
                                        <h4>{el?.projectDesc || el?.project?.projectDesc}</h4>
                                        <span>Month Year</span>
                                        <h6> <img src="/static/images/feather-ch.png" /> Completed DD/MM/YYYY</h6>
                                    </div>
                                </div>
                                <div className="col-md-4 layers">
                                    {isCompleted(el?.id || el?.project?.id) ? <a href="#" className="downloadcertificate">Download Certificate</a> : null}
                                    <a href="#" className="share">Share</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            :
            <NoDataFound />}
    </div>)
}

export default TabPanel