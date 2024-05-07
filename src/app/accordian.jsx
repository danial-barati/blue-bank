import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: "./font/BYekan.ttf",
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderTop: 0,
  },
  "&::before": {
    display: "none",
  },
  backgroundColor: "#fbfafb", // Set background color to #fbfafb
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#fbfafb", // Set background color to #fbfafb
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    padding: "5px 0",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#fbfafb", // Set background color to #fbfafb
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="w-full bg-[#fbfafb] my-10 py-14">
      <div className="w-full mx-auto 2xl:container">
        <div className={`max-w-[1200px] mx-auto px-10 text-[#737789]`}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="text-[#737789]"
            >
              <Typography className={myFont.className}>
                چگونه می‌توانم حساب بازکنم؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#737789]">
              <Typography className={myFont.className}>
                مراحل بازکردن حساب : ١.دانلود و نصب اپلیکیشن بلو ٢.داشتن یک خط
                تلفن همراه فعال که به نام خودتان است ٣.همراه داشتن اصل کارت ملی
                (برای کارت ملی‌های قدیمی، کد رهگیری درخواست صدور کارت هوشمند)
                برای ارسال تصاویر مربوطه
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              className="text-[#737789]"
            >
              <Typography className={myFont.className}>
                برای بازکردن حساب چه مدارکی لازم است؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#737789]">
              <Typography className={myFont.className}>
                اصل کارت ملی (برای کارت ملی‌های قدیمی، کد رهگیری درخواست صدور
                کارت هوشمند) برای ارسال تصاویر مربوطه و داشتن یک خط تلفن همراه
                فعال که به نام خودتان است.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              className="text-[#737789]"
            >
              <Typography className={myFont.className}>
                من کارت ملی هوشمند دریافت نکرده‌ام، آیا می‌توانم حساب بازکنم؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#737789]">
              <Typography className={myFont.className}>
                بله، اگر درخواست کارت ملی هوشمند را ثبت کردید، از راه ثبت کد
                رهگیری نوشته شده روی رسید ثبت‌نام کارت ملی هوشمند، امکان بازکردن
                حساب را دارید.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              className="text-[#737789]"
            >
              <Typography className={myFont.className}>
                من کارت ملی هوشمند ندارم و برگه رسید کارت ملی هوشمند را گم
                کرده‌ام، چطور می‌توانم حساب بازکنم؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#737789]">
              <Typography className={myFont.className}>
                در وب‌سایت سازمان ثبت و احوال کد رهگیری کارت ملی خود را پیداکنید
                و فرآیند بازکردن حساب را انجام دهید.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              className="text-[#737789]"
            >
              <Typography className={myFont.className}>
                مراحل بازکردن حساب چقدر زمان می‌برد؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#737789]">
              <Typography className={myFont.className}>
                باز کردن حساب در کمتر از ۷ دقیقه، بررسی مدارک، شناسایی هویت و
                فعال شدن حساب(در صورت تایید استعلام بانک مرکزی) حداکثر تا ۳ روز
                انجام می‌شود.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <div className="w-full flex flex-wrap justify-end px-5 mt-8">
            <Link href="" className="text-[#3094ea]">
              سوالات بیشتر ...
            </Link>
            <div className="w-full flex flex-wrap justify-center mt-8">
              <h3 className="text-center text-[25px] mb-6 w-full">
                خط ارتباطی برای پاسخ به سوالات شما
              </h3>
              <Link
                href=""
                className="w-[100px] h-[40px] text-white bg-[#3094ea] rounded-[20px] flex justify-center text-[18px] items-center"
              >
                بلولاین
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
