import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from '../Container';
import { Box, Flex } from '../Grid';
import NextIllustration from '../home/HomeNextIllustration';
import { getI18nLink } from '../I18nFormatters';
import Link from '../Link';
import StyledButton from '../StyledButton';
import { H1, P } from '../Text';

const FiscalSponsorship = () => {
  return (
    <Flex flexDirection={['column', 'row-reverse']} justifyContent="center" alignItems="center" px="16px" mt={4}>
      <Box ml={[null, '6px', '40px', null, '84px']} width={['288px', '324px', '478px', null, '558px']}>
        <NextIllustration
          alt="Fiscal sponsorship illustration"
          src="/static/images/become-a-host/fiscalSponsorship-illustration.png"
          width={558}
          height={414}
        />
      </Box>
      <Container display="flex" flexDirection="column" alignItems={['center', 'flex-start']}>
        <Box mt={[3, 0]} mb={[3, null, null, null, '24px']} width={['288px', '306px', '438px', null, '555px']}>
          <H1
            letterSpacing={['-0.008em', '-0.04em']}
            fontSize={['32px', '40px', null, null, '52px']}
            lineHeight={['40px', '48px', null, null, '56px']}
            textAlign={['center', 'left']}
            color="black.900"
            whiteSpace={[null, null, 'pre-line']}
          >
            <FormattedMessage id="becomeAHost.title" defaultMessage="Fiscal sponsorship has never been easier" />
          </H1>
        </Box>
        <Box width={['288px', '306px', null, null, '558px']} mb={[3, null, null, null, '24px']}>
          <P
            fontSize={['16px', null, null, null, '18px']}
            lineHeight={['24px', null, null, null, '26px']}
            textAlign={['center', 'left']}
            fontWeight="500"
            color="black.800"
          >
            <FormattedMessage
              id="becomeAHost.description"
              defaultMessage="Open Collective is purpose-built to streamline your processes, reduce overhead, increase transparency, and enable your organization to hold and manage funds for more projects in less time. <learnMoreLink>Learn more</learnMoreLink>."
              values={{
                learnMoreLink: getI18nLink({
                  href: 'https://docs.opencollective.com/help/fiscal-hosts/become-a-fiscal-host',
                  openInNewTab: true,
                }),
              }}
            />
          </P>
        </Box>
        <Link href="/organizations/new">
          <StyledButton minWidth={[283, 165, null, null, 183]} buttonStyle="dark" whiteSpace="nowrap">
            <FormattedMessage id="home.createHost" defaultMessage="Create a Fiscal Host" />
          </StyledButton>
        </Link>
      </Container>
    </Flex>
  );
};

export default FiscalSponsorship;
