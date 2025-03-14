import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackClaim from "../../assets/images/background/bgAirdrop.png";
import imgButtonStart from "../../assets/images/buttons/HomeWide.png";
import imgAirdropBee from "../../assets/images/bee/airdrop.png";
import {
  textAirdropEligibility,
  textAirdropParticipate,
  textAirdropPeriod,
  textAirdropRewards,
} from "../../data/Airdrop";

const Airdrop = () => {
  return (
    <StyledComponent>
      <SectionClaim>
        <TextAirdrop>Flappy Bee Airdrop</TextAirdrop>
        <ButtonStart onClick={() => {}}>Claim $BEET</ButtonStart>
      </SectionClaim>
      <SectionDescription>
        <SectionImageGroup>
          <ImageLeft>
            <img src={imgAirdropBee} width={"100%"} alt="" />
          </ImageLeft>
          <ImageRight>
            <img src={imgAirdropBee} width={"100%"} alt="" />
          </ImageRight>
          <img src={imgAirdropBee} width={"100%"} alt="" />
        </SectionImageGroup>
        <TextHead data-aos="fade-up" data-aos-duration="2000">
          If you are ready to come into the exciting world of FlappyBee and win
          fantastic rewards? Then lucky you, because here's your golden
          opportunity! We're delighted to introduce the FlappyBee Airdrop, where
          players get the chance to win BEET tokens and NFTs.
          {/* Flappy Bee will airdropping BEET Tokens and BEET NFTs Every months To
          the Flappy Bee holders and first 10 address of the leaderboard. */}
        </TextHead>
        <TextHeadGuide data-aos="zoom-in" data-aos-duration="1000">
          How to Participate:
        </TextHeadGuide>
        <SectionGuide data-aos="fade-up" data-aos-duration="2000">
          {textAirdropParticipate.map((each, index) => {
            return <TextEachGuide key={index}>{each}</TextEachGuide>;
          })}
        </SectionGuide>
        <TextHeadGuide data-aos="zoom-in" data-aos-duration="1000">
          Airdrop Period:
        </TextHeadGuide>
        <SectionGuide data-aos="fade-up" data-aos-duration="2000">
          {textAirdropPeriod.map((each, index) => {
            return <TextEachGuide key={index}>{each}</TextEachGuide>;
          })}
        </SectionGuide>
        <TextHeadGuide data-aos="zoom-in" data-aos-duration="1000">
          Prizes and Rewards:
        </TextHeadGuide>
        <SectionGuide data-aos="fade-up" data-aos-duration="2000">
          {textAirdropRewards.map((each, index) => {
            return <TextEachGuide key={index}>{each}</TextEachGuide>;
          })}
        </SectionGuide>
        <TextHeadGuide data-aos="zoom-in" data-aos-duration="1000">
          FlappyBee Game Eligibility:
        </TextHeadGuide>
        <SectionGuide data-aos="fade-up" data-aos-duration="2000">
          {textAirdropEligibility.map((each, index) => {
            return <TextEachGuide key={index}>{each}</TextEachGuide>;
          })}
        </SectionGuide>
        <TextHead data-aos="fade-up" data-aos-duration="2000">
          It's time to spread your wings and seize your chance in the FlappyBee
          Airdrop? It's an adventure like no other, where you can earn valuable
          tokens and unique NFTs while enjoying our thrilling blockchain-powered
          game. Don't miss out—connect your wallet, play Flappy Bee, and let the
          games begin! The true meaning of Play-and-earn!
        </TextHead>
        {/* <TextAirdropRate>
          <span style={{ fontWeight: "500" }}>Airdrop Rate:</span>
          {"\u00a0"}1 $PEPE : 0.00000420690 $BEET
        </TextAirdropRate> */}
      </SectionDescription>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 61, 40, 1);
`;

const SectionClaim = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-image: url(${imgBackClaim});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 125px 0px;
  box-sizing: border-box;

  /* box-shadow: inset 0px 0px 20px 0px #666666; */

  transition: 0.3s;
  @media (max-width: 1200px) {
    padding: 100px 0px;
  }
  @media (max-width: 1200px) {
    padding: 80px 0px;
  }
  @media (max-width: 768px) {
    padding: 60px 0px;
  }
  @media (max-width: 390px) {
    padding: 40px 0px;
  }
`;

const TextAirdrop = styled(Box)`
  color: #38150a;
  text-align: center;
  font-family: "Wendy One";
  font-size: 12em;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  -webkit-text-stroke: 3px white;

  transition: 0.3s;
  @media (max-width: 390px) {
    -webkit-text-stroke: 2px white;
  }
`;

const ButtonStart = styled(Box)`
  display: flex;
  width: 600px;
  height: 130px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgButtonStart});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 400;
  font-size: 6em;
  margin-top: 125px;

  /* identical to box height, or 129% */

  text-align: center;

  color: #511900;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 500px;
    height: 100px;
  }
  @media (max-width: 1024px) {
    margin-top: 80px;
    width: 400px;
    height: 93px;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
    width: 370px;
    height: 85px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 66px;
    margin-top: 40px;
  }
  @media (max-width: 390px) {
    width: 260px;
    height: 66px;
  }
`;

const SectionDescription = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  padding: 120px 360px;
  box-sizing: border-box;
  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 120px 180px;
  }
  @media (max-width: 1024px) {
    padding: 100px 120px;
  }
  @media (max-width: 768px) {
    padding: 120px 60px;
  }
  @media (max-width: 500px) {
    padding: 100px 40px;
  }
  @media (max-width: 390px) {
    padding: 80px 30px;
  }
`;

const SectionImageGroup = styled(Box)`
  display: flex;
  position: relative;
  width: 250px;
  aspect-ratio: 1;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 250px;
  }
  @media (max-width: 1024px) {
    width: 220px;
  }
  @media (max-width: 768px) {
    width: 192px;
  }
  @media (max-width: 500px) {
    width: 150px;
  }
  @media (max-width: 390px) {
    width: 120px;
  }

  > img {
    z-index: 100;
  }
`;

const ImageLeft = styled(Box)`
  display: flex;
  position: absolute;
  top: 50%;
  right: 180px;
  transform: translateY(-50%);
  width: 250px;
  aspect-ratio: 1;
  > img {
    z-index: 99;
  }

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 250px;
  }
  @media (max-width: 1024px) {
    width: 220px;
    right: 160px;
  }
  @media (max-width: 768px) {
    width: 192px;
    right: 150px;
  }
  @media (max-width: 500px) {
    width: 150px;
    right: 120px;
  }
  @media (max-width: 390px) {
    width: 120px;
    right: 90px;
  }
`;

const ImageRight = styled(Box)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 180px;
  transform: translateY(-50%);
  width: 250px;
  aspect-ratio: 1;
  > img {
    z-index: 98;
  }

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 250px;
  }
  @media (max-width: 1024px) {
    width: 220px;
    left: 160px;
  }
  @media (max-width: 768px) {
    width: 192px;
    left: 150px;
  }
  @media (max-width: 500px) {
    width: 150px;
    left: 120px;
  }
  @media (max-width: 390px) {
    width: 120px;
    left: 90px;
  }
`;

const TextHead = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  font-family: Lato;
  font-size: 3em;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  text-align: center;

  margin-top: 80px;
  transition: 0.3s;
  @media (max-width: 1024px) {
    margin-top: 70px;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
  }
  @media (max-width: 390px) {
    margin-top: 50px;
  }
`;

const TextHeadGuide = styled(Box)`
  color: #fff;
  text-align: center;
  font-family: Rowdies;
  font-size: 6em;
  font-style: normal;
  font-weight: 400;
  line-height: 75px;

  margin-top: 120px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 100px;
  }
  @media (max-width: 1024px) {
    margin-top: 80px;
  }
  @media (max-width: 768px) {
    line-height: 60px;
    margin-top: 60px;
  }
  @media (max-width: 390px) {
    margin-top: 50px;
    line-height: 50px;
  }
`;

const TextAirdropRate = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  font-family: Lato;
  font-size: 3em;
  font-style: normal;
  line-height: 33px;

  margin-top: 80px;
  transition: 0.3s;
  @media (max-width: 1024px) {
    margin-top: 70px;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
  }
  @media (max-width: 390px) {
    margin-top: 50px;
  }
`;

const SectionGuide = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;

  transition: 0.3s;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 390px) {
    margin-top: 20px;
  }
`;

const TextEachGuide = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  font-family: Lato;
  font-size: 3em;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;

  margin-top: 20px;

  transition: 0.3s;
  @media (max-width: 768px) {
    margin-top: 16px;
    line-height: 30px;
  }
  @media (max-width: 390px) {
    margin-top: 12px;
    line-height: 20px;
  }
`;

export default Airdrop;
