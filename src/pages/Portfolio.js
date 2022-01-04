// material
import { styled } from '@mui/material/styles';
import { Divider, Box, Container, Typography, Grid } from '@mui/material';
// components
import Page from '../components/Page';
import { PortfolioHero } from '../components/_external-pages/portfolio';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Portfolio() {
  return (
    <RootStyle title="Portfolio">
      <PortfolioHero />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <img src="/static/portfolio/react1.jpg" alt="portfolio-mobile" />
        </Box>
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <img src="/static/portfolio/react2.png" alt="portfolio-mobile" />
        </Box>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              ReactJs is the most popular frontend framework.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <img src="/static/portfolio/com-ipad.png" alt="portfolio-ipad" />
        </Box>
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <img src="/static/portfolio/M1.jpg" alt="portfolio-mobile" />
        </Box>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              These are social apps like instagram to publish photos and videos.(Android and iOS)
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <img src="/static/portfolio/blockchain1.png" alt="portfolio-ipad" />
        </Box>
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <img src="/static/portfolio/hederagraphvsblock.jpg" alt="portfolio-mobile" />
        </Box>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              We provides the most popular places to securely buy, store, and trade Bitcoin, Ethereum, and other top cryptocurrencies.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <img src="/static/portfolio/shopify.png" alt="portfolio-ipad" />
        </Box>
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <img src="/static/portfolio/Shopify-template.png" alt="portfolio-mobile" />
        </Box>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              We have all required tools and modules to create super fast responsive and mobile-ready website with amazing UX.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
    </RootStyle>
  );
}
