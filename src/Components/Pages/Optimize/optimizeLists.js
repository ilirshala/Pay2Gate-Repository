import optimizeImg1 from "../../../Assets/optimizeImg1.webp";
import optimizeImg2 from "../../../Assets/optimizeImg2.webp";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import optimizeEmail from "../../../Assets/svg/optimizeEmail.svg";
import optimizeMegapone from "../../../Assets/svg/optimizeMegaphone.svg";
import optimizeLogo3 from "../../../Assets/svg/optimizeLogo3.svg";
import optimizeLogo4 from "../../../Assets/svg/optimizeLogo4.svg";

export const cardList1 = [
  {
    title: "Localization",
    paragraf:
      "When customers se the language, currency and payment methods they expect, they are more likely to subscribe.",
    p1: "Calculate taxes applicable to each region.",
    p2: "Define market-specific pricing..",
    p3: "Automatically display content based on customer location.",
    icon1: <CheckCircleIcon />,
    icon2: <CheckCircleIcon />,
    icon3: <CheckCircleIcon />,
    img: optimizeImg1,
  },
];

export const cardList2 = [
  {
    title: "Subscription Management",
    paragraf:
      "Advanced reporting is critical for understanding and growing your recurring revenue.",
    p1: "Recurring revenue by month or year (MRR/ARR)",
    p2: "Average revenue per customer (ARPC) & sale price (ASP)",
    p3: "Renewal rate, churn rate and attrition",
    p4: "Customer lifetime value (CLV)",
    p5: "Customer acquisition costs (CAC)",
    icon1: <CheckCircleIcon />,
    icon2: <CheckCircleIcon />,
    icon3: <CheckCircleIcon />,
    icon4: <CheckCircleIcon />,
    icon5: <CheckCircleIcon />,
    img: optimizeImg2,
  },
];

export const bannerList = [
  {
    leftTitle: "Email Marketing",
    rightTitle: "Performance Marketing",
    leftParagraf:
      "Email marketing is a proven recurring revenue generator, and we help you leverage it.",
    rightParagraf:
      "Strategic publisher partnerships boost your traffic, brand recognition and overall revenue.",
    leftImg: optimizeEmail,
    rightImg: optimizeMegapone,
    color: "#FF8C00",
    leftP1:
      "Maximize free trial conversions, signups, renewals, in-app registrations and more..",
    leftP2:
      "Execute campaigns and measure their effectiveness with in-depth tracking",
    leftP3:
      "Create new revenue opportunities and nurture long-term customer relations.",
    rightP1:
      "Rely on our experts in global publisher recruitment, communications and incentives.",
    rightP2:
      "Give publishers access to assets and reporting in or web-based performance platform.",
    rightP3: "Let us track commissions and handle payouts on your behalf.",
    displayIcon: "none",
  },
];
export const bannerList2 = [
  {
    leftTitle: "Testing & Optimization",
    rightTitle: "Client Success Management",
    leftParagraf:
      "Our experts will help you develop testing strategies, analyze results and put optimization in place.",
    rightParagraf:
      "Join forces with a team of global commerce experts committed to your success.",
    leftImg: optimizeLogo3,
    rightImg: optimizeLogo4,
    color: "#FF8C00",
    leftP1:
      "Make data-based decisions for improving your subscription program.",
    leftP2:
      "Experiment with different plan and pricing configurations and strategies.",
    leftP3:
      "Improve your customer experience, minimizing churn and maximizing renewals.",
    rightP1: "Manage your migration to our global commerce platform..",
    rightP2: "Onboard and train your employees in using our technology.",
    rightP3: "Conduct testing to identify optimization opportunities",
    displayIcon: "none",
    rightBgColor: "#F1F1F1",
    textColor: "black",
    leftBgColor: "#333333",
  },
];
