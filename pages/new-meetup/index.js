import { useRouter } from "next/router";

import { useState } from "react";

import Head from "next/head";

import LoaderComponents from "../../components/loading-process/LoaderComponents";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const [loader, setLoader] = useState(false);

  const router = useRouter();

  async function addMeetupHandler(enteredMeetUpData) {
    setLoader(true);
    await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setLoader(false);
        return res.json();
      } else {
        return res.json().then((data) => {
          throw new Error("Error in query");
        });
      }
    });
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunites"
        />
      </Head>
      {loader && <LoaderComponents />}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />{" "}
    </>
  );
}

export default NewMeetupPage;
