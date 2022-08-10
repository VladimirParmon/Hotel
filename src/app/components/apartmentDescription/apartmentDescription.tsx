import { Divider, Typography } from "@mui/material";
import { accessability, conveniences, freedoms, typeDescriptions } from "app/constants/constants";
import { IApartment } from "app/constants/models";
import FeedbackForm from "../feedbackForm";

import {
  Description,
  DescriptionSpan,
  Feed,
  Notice,
  NoticeContainer,
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
          <DescriptionSpan sx={{ fontSize: "1.3rem" }}>
            {typeDescriptions[apartment.type]}
          </DescriptionSpan>
        </div>
        <Divider />
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
        <Divider />
        <NoticeContainer>
          <Notice>
            <SectionHeading variant="h3">Please notice:</SectionHeading>
            <DescriptionSpan>
              We do not encourage parties, big loud events and celebrations that involve music
              and\or dancing in our apartments, even when guests are allowed. After 11 pm we expect
              our customers to adhere to the rule of respectful silence; especially silence is
              important in\near apartments, that host infants.
            </DescriptionSpan>
          </Notice>
          <Notice>
            <SectionHeading variant="h3">Refund policies:</SectionHeading>
            <DescriptionSpan>
              If the booking is cancelled in under 48 hours from the moment it was made, we grant a
              full refund. However, after that point, if the booking is cancelled, customer is
              charged with a service fee before the refund.
            </DescriptionSpan>
          </Notice>
          <Notice>
            <SectionHeading variant="h3">Checking in & out:</SectionHeading>
            <DescriptionSpan>
              We expect our customers to arrive for checking in no earlier than 1 pm. Customers must
              check out before 11 am.
            </DescriptionSpan>
          </Notice>
        </NoticeContainer>
        <Divider />
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
