import React from "react";
import avatar from "../assets/johnSmith.jpeg";

export const About = () => {
  return (
    <main className="About">
      <div className="container-lg">
        <div className="row">
          <img className="col-lg-6 col-md-12" src={avatar} alt="photo" />
          <article className="col-lg-6 col-md-12">
            <h2>I'm John Smith</h2>
            <p>
              The scent of hay was in the air through the lush meadows beyond
              Pyrford, and the hedges on either side were sweet and gay with
              multitudes of dog-roses. The heavy firing that had broken out
              while we were driving down Maybury Hill ceased as abruptly as it
              began, leaving the evening very peaceful and still. We got to
              Leatherhead without misadventure about nine o'clock, and the horse
              had an hour's rest while I took supper with my cousins and
              commended my wife to their care.
            </p>
            <p>
              My wife was curiously silent throughout the drive, and seemed
              oppressed with forebodings of evil. I talked to her reassuringly,
              pointing out that the Martians were tied to the Pit by sheer
              heaviness, and at the utmost could but crawl a little out of it;
              but she answered only in monosyllables. Had it not been for my
              promise to the innkeeper, she would, I think, have urged me to
              stay in Leatherhead that night. Would that I had! Her face, I
              remember, was very white as we parted.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};
