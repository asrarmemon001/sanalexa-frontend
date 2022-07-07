import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/layout";
import LearningPageTemplate from "../templates/learning";
import { getToken } from "../utils/constants";


export default function Home() {
  const router = useRouter()
  useEffect(() => {
    if (!Boolean(getToken())) {
      router.push("/")
    }
  }, [])
  return (
    <Layout>
      <LearningPageTemplate />
    </Layout>
  )
}
