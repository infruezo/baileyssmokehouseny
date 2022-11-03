import React from "react";
import { Helmet } from "react-helmet";

const ConstantContactForm = () => {
  // const [loaded, setLoaded] = React.useState(false);

  // React.useEffect(() => {
  //   const script = document.createElement("script");
  //   script.setAttribute(
  //     "src",
  //     "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
  //   );
  //   script.setAttribute("id", "signupScript");
  //   script.async = true;
  //   script.defer = true;

  //   console.log("trying to load script");
  //   console.log("script loading");

  //   try {
  //     setTimeout(() => {
  //       script.onload = () => {
  //         setLoaded(true);
  //       };
  //     }, 3000);

  //     setLoaded(true);

  //     console.log("script loaded.");
  //   } catch (error) {
  //     console.log(error);
  //     console.log("script didnt load ? ? ?");
  //     setLoaded(false);
  //   }
  // }, []);

  return (
    <>
      <Helmet>
        <script> var _ctct_m = "8e56be648f9b634fc29529dcaca516e4"; </script>
        <script
          id="signupScript"
          src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
          async
          defer
        ></script>
      </Helmet>
      <div
        class="ctct-inline-form"
        data-form-id="81076f1d-04cf-4b02-92ea-49b1bef406e3"
      ></div>
    </>
  );
};

export default ConstantContactForm;
