import { Typography } from "@mui/material";
import { accessability, conveniences, freedoms, typeDescriptions } from "app/constants/constants";
import { IApartment } from "app/constants/models";
import FeedbackForm from "../feedbackForm";

import {
  Description,
  DescriptionSpan,
  Feed,
  Section,
  SectionHeading,
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
          <Typography variant="h2">What to expect?</Typography>
          <DescriptionSpan sx={{ fontSize: "1.3rem", marginBottom: "20px" }}>
            {typeDescriptions[apartment.type]}
          </DescriptionSpan>
        </div>
        <Sections>
          <Section>
            <SectionInnerLeft>
              <SectionHeading variant="h3">Conveniences:</SectionHeading>
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
              <SectionHeading variant="h3">Terms of stay:</SectionHeading>
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
              <SectionHeading variant="h3">Accessability:</SectionHeading>
              {accessabilityChecked.map((el) => (
                <SectionInner key={el.span} dimmed={el.dimmed}>
                  <el.icon sx={{ fontSize: "2.5rem" }} color="secondary" />
                  <DescriptionSpan>{el.span}</DescriptionSpan>
                </SectionInner>
              ))}
            </SectionInnerLeft>
          </Section>
        </Sections>
        <div style={{ padding: "20px" }}>
          <SectionHeading variant="h3">Feedback from customers</SectionHeading>
          {apartment.reviews.length ? (
            <p>reviews go here</p>
          ) : (
            <DescriptionSpan style={{ textAlign: "center" }}>
              No feedback so far. Be first!
            </DescriptionSpan>
          )}
        </div>
        <FeedbackForm />
      </Feed>
    </Description>
  );
}
