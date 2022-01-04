import PropTypes from 'prop-types';
// material
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box sx={{ width: 80, height: 30, ...sx }}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 379.623 141">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          {/* <path
            fill="url(#BG1)"
            d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
          /> */}
          {/* <path
            fill="url(#BG2)"
            d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
          /> */}
          <path id="Union_8" data-name="Union 8" d="M45.1,201.9a13.9,13.9,0,0,1-4.066-8.9H41V93H14a14,14,0,0,1-.98-27.966A3.523,3.523,0,0,1,13.5,65c.051,0,.1,0,.152,0,.116,0,.232,0,.348,0v.037a3.5,3.5,0,0,1,0,6.929V72a7,7,0,0,0,0,14H43a5.005,5.005,0,0,1,5,5V192h0a7,7,0,0,0,14,.111V133h.035a3.5,3.5,0,0,1,6.93,0H69v60h-.035A14,14,0,0,1,45.1,201.9ZM305.74,156V115h6.424v34.527H333.58V156Zm-33.194,0V115h6.425v41Zm-118.355,0h-7.761l-3.884-14.609-2.085,6.876-3.375-14.716.715-2.358,4.84-15.008.171.021.78-.067,6.14,23.093L153.973,115h7.611l-7.174,41Zm-17.031,0h-7.609l-7.174-41h7.611l7.173,41h0Zm212.48,0v-6.473h29.982V156Zm-132.774,0v-6.473h18.2V156ZM171.9,156v-6.473h29.981V156Zm63.175-6.478c3.7,0,6.278-2.218,6.278-5.39s-2.582-5.4-6.278-5.4v0h-18.2v-6.474h16.061v-.006c3.7,0,6.278-2.217,6.278-5.389s-2.581-5.4-6.278-5.4v0H216.867V115h16.062a13.172,13.172,0,0,1,8.933,3.477,11.27,11.27,0,0,1,.686,16.1A12.706,12.706,0,0,1,244,135.739a11.293,11.293,0,0,1,0,16.785A13.175,13.175,0,0,1,235.07,156Zm114.571-10.784v-6.474h26.77v6.474Zm-177.746,0v-6.474h26.769v6.474Zm177.746-17.264V115h29.982v6.474Zm-177.746,0V115h29.981v6.474ZM62.035,116H62V90h.1A5.01,5.01,0,0,1,67,86H96a7,7,0,0,0,.158-14H31v-.035a3.5,3.5,0,0,1,0-6.929V65H98v.14A14,14,0,0,1,96,93H69v23h-.035a3.5,3.5,0,0,1-6.93,0Z" transform="translate(0 -65)" fill="#00AB55"/>
          {/* <path
            fill="url(#BG3)"
            d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
          /> */}
        </g>
      </svg>
    </Box>
  );
}