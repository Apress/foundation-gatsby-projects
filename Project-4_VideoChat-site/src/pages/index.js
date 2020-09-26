import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/login-form";
import Video from "../components/video";

const IndexPage = () => {
  const [token, setToken] = useState(false);
  const [name, setName] = useState(false);

  return (
    <Layout>
      <SEO title="Home" />
      {!token ? <LoginForm storeToken={setToken} storeName={setName} /> : <Video token={token} name={name} />}
    </Layout>
  )
}

export default IndexPage
