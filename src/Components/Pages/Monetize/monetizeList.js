import monetizeImg1 from "../../../Assets/monetizeImg1.webp";
import monetizeImg2 from "../../../Assets/monetizeImg2.webp";
import monetizeImg3 from "../../../Assets/monetizeImg3.webp";
import monetizeTax from "../../../Assets/svg/monetizeTax.svg";
import monetizeMoney from "../../../Assets/svg/monetizeMoney.svg";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export const cardList1 = [
  {
    title: "Billing & Invoicing",
    paragraf:
      "Our flexible billing platform makes it easy to configure and manage all pricing and billion scenarios.",
    p1: "Know how to bill, for how much and via which payment method",
    p2: "Easily handle complex billing scenarios",
    p3: "Bill accurately for term, tiered and usage- based subscriptions.",
    p4: "Manage automated and manual renewals",
    p5: "Provide your business buyers with a B2C-like experience that meets their unique requirements.",
    icon1: <CheckCircleIcon />,
    icon2: <CheckCircleIcon />,
    icon3: <CheckCircleIcon />,
    icon4: <CheckCircleIcon />,
    icon5: <CheckCircleIcon />,
    img: monetizeImg1,
  },
];

export const cardList2 = [
  {
    title: "Payment Processing",
    paragraf:
      "Processing payments has a lot of moving parts, and we handle them all.",
    p1: "Manages relations with global payment service providers, minimizing foreign billing costs",
    p2: "Maintains strict compliance with PCI DSS standards",
    p3: "Monitors global taxation requirements, which are constantly changing.",
    p4: "Complies with country-specific payment legislation.",
    icon1: <CheckCircleIcon />,
    icon2: <CheckCircleIcon />,
    icon3: <CheckCircleIcon />,
    icon4: <CheckCircleIcon />,
    img: monetizeImg2,
  },
];

export const bannerList = [
  {
    leftTitle: "Taxation",
    rightTitle: "Revenue Retention",
    leftParagraf:
      "We monitor and comply with complex global taxation requirements.",
    rightParagraf:
      "Our revenue retention tools help reduce involuntary churn with a proven multi-step approach.",
    leftImg: monetizeTax,
    rightImg: monetizeMoney,
    color: "white",
    leftP1:
      "Maximize free trial conversions, signups, renewals, in-app registrations and more..",
    leftP2:
      "Execute campaigns and measure their effectiveness with in-depth tracking",
    leftP3:
      "Create new revenue opportunities and nurture long-term customer relations.",
    rightP1: "Increase success rate for credit card renewals by up to 20%",
    rightP2:
      "Automatically receive updated credit card information without customer intervention.",
    rightP3:
      "Decrease customer service costs dedicated to manually updating card details",
    displayIcon: "none",
  },
];
