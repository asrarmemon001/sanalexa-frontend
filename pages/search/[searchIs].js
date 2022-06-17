import Layout from "../../components/layout";
import HomePageTemplate from "../../templates/home";
import {useRouter} from "next/router";
import { projectList } from "../../utils/api-Request"
import { useEffect } from "react";


export default function Search(props) {
  const { query } = useRouter();
  console.log("props", query)

  const getProjects = async() => {
    const data = { offset : 1, limit : 10000000,search : query?.searchIs, plateform: '', sector: '' }
    const projects = await projectList(data)

    console.log("------------------------->",projects)
  }

  useEffect(() => {
    getProjects()
  },[])

  return (
    <Layout>
      {/* <HomePageTemplate /> */}
    </Layout>
  )
}
