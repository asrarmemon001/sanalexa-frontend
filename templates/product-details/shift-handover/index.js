import { useState } from "react"
const TabDescriptionContent = ({data}) => {
    return (<div id="tab1">
        <div className="tsb-meneg">
            <div dangerouslySetInnerHTML={{__html:data || `<div className="muted">No data found</div>`}}/>
        </div>
    </div>)
}

const TabWhatYouLearnContent = ({data}) => {
    return (<div id="tab2">
         <div dangerouslySetInnerHTML={{__html:data || `<div className="muted">No data found</div>`}}/>
         </div>)
}
const ShiftHandover = ({productDetails}) => {
    const [tabPanels, setTabPanels] = useState({
        activeTab: 0,
        tabs: [
            { id: "tab1-tab", name: "Description", panelDetails: <TabDescriptionContent data={productDetails.shift_handover_description}/> },
            { id: "tab2-tab", name: "What you will learn", panelDetails: <TabWhatYouLearnContent data={productDetails.shift_handover_about}/> }
        ]
    })

    const handleActiveTab = (activeTab) => {
        setTabPanels((v) => ({
            ...v,
            activeTab
        }))
    }
    return (
        <section className="shift-hendverys w-100">
            <div className="container">
                <div className="all-teb TabDesign"> 
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