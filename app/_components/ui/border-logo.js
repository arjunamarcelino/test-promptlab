export const BorderLogo = ({ logo }) => {
  return (
    <div className="min-w-[135.8px] min-h-[114.7px] flex items-center justify-center relative bg-[url('/images/img-frame-1.png')] bg-cover">
      <div className="flex w-[76px] h-[72px] buttonGradient items-center justify-center rounded-[12px] relative z-10">
        {logo}
      </div>
    </div>
  );
};
