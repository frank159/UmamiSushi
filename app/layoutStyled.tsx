import styled from "styled-components";
import { motion } from "framer-motion";

export const LoadingOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RippleContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RippleCircle = styled(motion.div)`
  position: absolute;
  border: 2px solid #fff;
  border-radius: 50%;
`;