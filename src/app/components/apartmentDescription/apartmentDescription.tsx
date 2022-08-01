import { Typography } from "@mui/material";
import { accessability, conveniences, freedoms, typeDescriptions } from "app/constants/constants";
import { IApartment } from "app/constants/models";
import FeedbackForm from "../feedbackForm";

import {
  Description,
  DescriptionSpan,
  Feed,
  Section,
  SectionInner,
  SectionInnerLeft,
  SectionInnerRight,
  Sections,
} from "./components";

interface ApartmentDescriptionProps {
  children: React.ReactNode;
  apartment: IApartment;
}

export function ApartmentDescription({ apartment, children }: ApartmentDescriptionProps) {
  const conveniencesChecked = conveniences.map((el) => {
    const mark = el.mark as keyof IApartment;
    const hasSuchConvenience = apartment[mark];
    return { ...el, dimmed: !hasSuchConvenience };
  });
  const freedomsChecked = freedoms.map((el) => {
    const mark = el.mark as keyof IApartment;
    const hasSuchFreedom = apartment[mark];
    return { ...el, dimmed: !hasSuchFreedom };
  });
  const accessabilityChecked = accessability.map((el) => {
    const mark = el.mark as keyof IApartment;
    const hasSuchAccessability = apartment[mark];
    return { ...el, dimmed: !hasSuchAccessability };
  });
  return (
    <Description>
      {children}
      <Feed>
        <div style={{ textAlign: "justify" }}>
          <h2>What to expect?</h2>
          <DescriptionSpan>{typeDescriptions[apartment.type]}</DescriptionSpan>
        </div>
        <Sections>
          <Section>
            <SectionInnerLeft>
              <h3 style={{ textAlign: "center" }}>Conveniences:</h3>
              {conveniencesChecked.map((el) => (
                <SectionInner key={el.span} dimmed={el.dimmed}>
                  <el.icon sx={{ fontSize: "2.5rem" }} color="secondary" />
                  <DescriptionSpan>{el.span}</DescriptionSpan>
                </SectionInner>
              ))}
            </SectionInnerLeft>
          </Section>
          <Section>
            <SectionInnerRight>
              <h3 style={{ textAlign: "center" }}>Terms of stay:</h3>
              {freedomsChecked.map((el) => (
                <SectionInner key={el.span} dimmed={el.dimmed}>
                  <el.icon sx={{ fontSize: "2.5rem" }} color="secondary" />
                  <DescriptionSpan>{el.span}</DescriptionSpan>
                </SectionInner>
              ))}
            </SectionInnerRight>
          </Section>
          <Section>
            <SectionInnerLeft>
              <h3 style={{ textAlign: "center" }}>Accessability:</h3>
              {accessabilityChecked.map((el) => (
                <SectionInner key={el.span} dimmed={el.dimmed}>
                  <el.icon sx={{ fontSize: "2.5rem" }} color="secondary" />
                  <DescriptionSpan>{el.span}</DescriptionSpan>
                </SectionInner>
              ))}
            </SectionInnerLeft>
          </Section>
        </Sections>
        <div>
          <h3>Feedback from customers</h3>
          <Typography style={{ textAlign: "center" }}>No feedback so far</Typography>
          <h3>Leave my feedback</h3>
        </div>
        <FeedbackForm />
      </Feed>
    </Description>
  );
}
