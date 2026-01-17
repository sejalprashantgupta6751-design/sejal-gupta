import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  Icon,
  Tag,
} from "@once-ui-system/core";
import { baseURL, person, process } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: process.title,
    description: process.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(process.title)}`,
    path: process.path,
  });
}

export default function Process() {
  return (
    <Column maxWidth="m" paddingTop="24" paddingBottom="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={process.path}
        title={process.title}
        description={process.description}
        image={`/api/og/generate?title=${encodeURIComponent(process.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Header */}
      <Column fillWidth gap="16" marginBottom="xl" horizontal="center">
        <Text
          variant="body-default-s"
          onBackground="brand-weak"
          align="center"
          style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
        >
          How I Work
        </Text>
        <Heading variant="display-strong-xl" align="center">
          Design{" "}
          <Text as="span" onBackground="brand-strong">
            Process
          </Text>
        </Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          align="center"
          style={{ maxWidth: "600px" }}
        >
          {process.subtitle}
        </Text>
      </Column>

      {/* Process Steps */}
      <Column fillWidth gap="l" marginBottom="xl">
        {process.steps.map((step: any, index: number) => (
          <Row
            key={step.number}
            fillWidth
            padding="24"
            radius="l"
            border="neutral-medium"
            background="surface"
            gap="20"
            vertical="start"
          >
            {/* Step Icon and Number */}
            <Column gap="12" flex={0} minWidth="80">
              <Row
                fitWidth
                paddingX="12"
                paddingY="8"
                radius="m"
                background="brand-alpha-weak"
                border="brand-alpha-medium"
                horizontal="center"
              >
                <Text
                  variant="label-default-s"
                  onBackground="brand-strong"
                  style={{ fontWeight: 600 }}
                >
                  STEP {step.number}
                </Text>
              </Row>
              <Row
                fitWidth
                width="56"
                height="56"
                radius="full"
                background="brand-alpha-weak"
                horizontal="center"
                vertical="center"
              >
                <Icon name={step.icon} onBackground="brand-medium" size="l" />
              </Row>
            </Column>

            {/* Step Content */}
            <Column flex={1} gap="12">
              <Heading variant="heading-strong-l" marginBottom="4">
                {step.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {step.description}
              </Text>

              {/* Deliverables */}
              {step.deliverables.length > 0 && (
                <Column gap="8" marginTop="8">
                  <Text
                    variant="label-default-s"
                    onBackground="neutral-medium"
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Includes
                  </Text>
                  <Row wrap gap="8">
                    {step.deliverables.map(
                      (deliverable: string, idx: number) => (
                        <Tag key={idx} size="m" variant="neutral">
                          {deliverable}
                        </Tag>
                      ),
                    )}
                  </Row>
                </Column>
              )}

              {/* Timeline */}
              <Row
                fillWidth
                paddingTop="12"
                marginTop="8"
                gap="8"
                vertical="center"
                style={{ borderTop: "1px solid var(--neutral-border-weak)" }}
              >
                <Icon name="clock" onBackground="neutral-medium" size="s" />
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {step.timeline}
                </Text>
              </Row>
            </Column>
          </Row>
        ))}
      </Column>

      {/* Payment Structure Section */}
      <Column fillWidth gap="32" marginTop="xl" paddingTop="xl">
        <Column gap="12" horizontal="center">
          <Text
            variant="body-default-s"
            onBackground="brand-weak"
            align="center"
            style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            Investment
          </Text>
          <Heading variant="display-strong-m" align="center">
            {process.payment.title}
          </Heading>
          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "600px" }}
          >
            {process.payment.subtitle}
          </Text>
        </Column>

        {/* Payment Cards */}
        <Row
          fillWidth
          gap="20"
          horizontal="center"
          s={{ direction: "column" }}
          m={{ direction: "row" }}
        >
          {/* Advance */}
          <Column
            flex={1}
            padding="32"
            radius="l"
            background="surface"
            gap="16"
            horizontal="center"
            shadow="m"
            fillWidth
            s={{ maxWidth: "100%" }}
            m={{ maxWidth: "none" }}
          >
            <Text
              variant="display-strong-xl"
              onBackground="accent-strong"
              align="center"
              style={{ fontSize: "3.5rem" }}
            >
              {process.payment.advance.percentage}
            </Text>
            <Heading variant="heading-strong-m">Advance</Heading>
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              align="center"
            >
              {process.payment.advance.subtitle}
            </Text>
          </Column>

          {/* Mid-Project */}
          <Column
            flex={1}
            padding="32"
            radius="l"
            background="surface"
            gap="16"
            horizontal="center"
            shadow="m"
            fillWidth
            s={{ maxWidth: "100%" }}
            m={{ maxWidth: "none" }}
          >
            <Text
              variant="display-strong-xl"
              onBackground="accent-strong"
              align="center"
              style={{ fontSize: "3.5rem" }}
            >
              {process.payment.midProject.percentage}
            </Text>
            <Heading variant="heading-strong-m">Mid-Project</Heading>
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              align="center"
            >
              {process.payment.midProject.subtitle}
            </Text>
          </Column>

          {/* Final */}
          <Column
            flex={1}
            padding="32"
            radius="l"
            background="surface"
            gap="16"
            horizontal="center"
            shadow="m"
            fillWidth
            s={{ maxWidth: "100%" }}
            m={{ maxWidth: "none" }}
          >
            <Text
              variant="display-strong-xl"
              onBackground="accent-strong"
              align="center"
              style={{ fontSize: "3.5rem" }}
            >
              {process.payment.final.percentage}
            </Text>
            <Heading variant="heading-strong-m">Final</Heading>
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              align="center"
            >
              {process.payment.final.subtitle}
            </Text>
          </Column>
        </Row>

        {/* Disclaimer */}
        <Text
          variant="body-default-xs"
          onBackground="neutral-medium"
          align="center"
          marginTop="16"
          style={{ fontStyle: "italic" }}
        >
          {process.payment.disclaimer}
        </Text>
      </Column>
    </Column>
  );
}
