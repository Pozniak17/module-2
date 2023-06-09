import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fed9ff66;
  position: relative;
  border: 2px dashed ${props => props.theme.colors.black};
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.space[2]}px;
`;

export const CardTitle = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.primaryText};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 24px;
  font-weight: ${props => props.theme.fontWeights.normal};
  letter-spacing: 0.25px;
  /* стилізуємо іконку react-icons (вона вкладена в Info) */
  svg {
    display: block;
    margin-right: ${props => props.theme.space[3]}px;
    color: ${props => props.theme.colors.secondaryText};
  }
`;

export const Chip = styled.span`
  position: absolute;
  top: ${props => props.theme.space[2]}px;
  right: ${props => props.theme.space[2]}px;
  padding: 4px 8px;
  border-radius: ${props => props.theme.radii.normal};
  text-transform: uppercase;
  background-color: #000;
  color: ${props => props.theme.colors.white};

  background-color: ${props => {
    switch (props.eventType) {
      case 'free':
        return props.theme.colors.green;
      case 'paid':
        return props.theme.colors.blue;
      case 'vip':
        return props.theme.colors.red;
      default:
        return '#000';
    }
  }};
`;
