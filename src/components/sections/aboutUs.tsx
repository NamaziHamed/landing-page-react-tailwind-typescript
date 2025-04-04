import Info from "../cards/info";
import Container from "../shared/container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/title";

export default function About() {
  return (
    <section id="about-us" className="">
      <Container
        className="flex flex-col md:flex-row
            gap-10 lg:gap-12 items-center"
      >
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About Our Mission"
              className="w-full h-full object-cover
              rounded-xl shadow-lg relative z-10"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 flex flex-col">
          <Title>About Our AI Solution</Title>
          <Paragraph>
            Our mission is to harness the power of AI to drive innovation,
            efficiency, and growth for businesses of all sizes. We strive to
            deliver cutting-edge solutions that simplify complex processes,
            enhance decision-making, and create smarter digital experiences.
          </Paragraph>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Mission"
              description="Empower clients through smart and reliable digital solutions."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>

            <Info
              title="Vision"
              description="Lead innovation in accessible and impactful technology worldwide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
}
