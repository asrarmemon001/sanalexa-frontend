import { useState } from "react"
const TabDescriptionContent = () => {
    return (<div id="tab1">
        <div className="tsb-meneg">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Then adjust its left property and width property. Add a transition in your CSS, et voil  .</p>
            <div className="teb-under-con">
                <h5>Details</h5>
                <ul>
                    <li><p><i className="fa fa-tint" aria-hidden="true"></i><span> Duration: 20mins</span></p></li>
                    <li><p><i className="fa fa-tint" aria-hidden="true"></i><span> Duration: 20mins</span></p></li>
                    <li><p><i className="fa fa-pagelines" aria-hidden="true"></i><span> Duration: 20mins</span></p></li>
                    <li><p><i className="fa fa-tint" aria-hidden="true"></i><span> Duration: 20mins</span></p></li>
                </ul>
            </div>
        </div>
    </div>)
}

const TabWhatYouLearnContent = () => {
    return (<div id="tab2">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Then adjust its left property and width property. Add a transition in your CSS,</p>
    </div>)
}
const ShiftHandover = () => {
    const [tabPanels, setTabPanels] = useState({
        activeTab: 0,
        tabs: [
            { id: "tab1-tab", name: "Description", panelDetails: <TabDescriptionContent /> },
            { id: "tab2-tab", name: "What you will learn", panelDetails: <TabWhatYouLearnContent /> }
        ]
    })

    const handleActiveTab = (activeTab) => {
        setTabPanels((v) => ({
            ...v,
            activeTab
        }))
    }
    return (
        <section className="shift-hendvery">
            <div className="container">
                <div className="all-teb">
                    <h3>Shift handover</h3>
                    <div id="material-tabs">
                        <ul>
                            {tabPanels.tabs.map((el, ii) => {
                                return (<li  key={`tab-${ii}`}>
                                    <span id={el.id} onClick={()=>handleActiveTab(ii)} className={tabPanels.activeTab == ii ? "active" : ''}>{el.name}</span></li>)
                            })}
                        </ul>
                    </div>

                    <div className="tab-content">
                        <div id={`panel-${tabPanels.tabs[tabPanels.activeTab].id}`} key={`panel-${tabPanels.activeTab}`}>{tabPanels.tabs[tabPanels.activeTab].panelDetails}</div>
                    </div>
                </div>
            </div>
        </section>)
}
export default ShiftHandover