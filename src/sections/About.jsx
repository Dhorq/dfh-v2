const About = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-5 py-5 lg:px-25 lg:py-5">
      <div className="pb-10 lg:pb-0 lg:pr-20">
        <h2 className="text-5xl font-semibold mb-5">Who we are?</h2>
        <p className="text-justify">
          Dahlia Family House is a villa located in Sukabumi. It is part of the
          larger Dahlia Group, which began in 1970 as Tart Dahlia, a well-known
          bakery for weddings and traditional events. Today, Dahlia JP Two also
          operates Dahlia Family House, a spacious guest house ideal for family
          gatherings, corporate retreats, barbecues, or as a base for wedding
          guests. The company collaborates with creative teams, event
          organizers, and corporate clients to ensure successful and memorable
          events.
        </p>

        <p className="hidden lg:block text-justify mt-5">
          By specializing in party equipment rental and guest house services. It
          was originally established in 1980 and redeveloped in 2023 with
          innovations and a more complete, up-to-date range of rental items to
          follow current trends. DAHLIA JP Two is part of the DAHLIA company,
          formerly known as TART DAHLIA, which has been based in Sukabumi since
          1970. The company initially focused on making cakes for weddings,
          circumcision ceremonies, and various pastries such as cookies, tarts,
          bluder, and ontbijtkoek.
        </p>

        <p className="hidden lg:block text-justify mt-5">
          In 1980, the business expanded to offer party equipment rental,
          including tents and other event supplies. In response to the growing
          demand for easily accessible party equipment, DAHLIA innovated in 2023
          by enhancing its rental offerings and providing a guest house to
          support successful events. Dahlia Family House serves as a guest house
          for families, offices, or groups of friends who want to hold
          gatherings such as karaoke, barbecue, reunions, or to stay when
          attending weddings and other events in Sukabumi. Meanwhile, Dahlia JP
          Rental offers rental services for party and event equipment to ensure
          events run smoothly. Additionally, DAHLIA JP Two collaborates with
          creative teams, event organizers (EO), wedding organizers (WO),
          corporate events, exhibitions, and other partners to support the
          planning and success of various events.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-4xl font-medium">2+</h3>
          <p>Years of Excellence</p>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-4xl font-medium">50+</h3>
          <p>Guests Managed</p>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-4xl font-medium">99%</h3>
          <p>Guests Satisfaction</p>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-4xl font-medium">99%</h3>
          <p>Great Reviews</p>
        </div>
        <video
          className="w-full col-span-2 lg:col-span-4 h-[390px] border border-black/50 rounded-2xl"
          controls
        >
          <source
            src="https://drive.google.com/file/d/1GBky8V3Zi2RLKBapG6RlUalS3W5QAp_D/view?usp=sharing"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default About;
