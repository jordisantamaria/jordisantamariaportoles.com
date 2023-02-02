import { InProgress, Process } from "../icons";

export const StoryTelling = () => {
  return (
    <div className="mt-[124px] font-bold">
      <div className="grid grid-cols-2 items-center gap-[80px]">
        <Process className="h-[364px] w-[100%]" />
        <div>
          <h3 className="text-[22px] mb-6">A real problem</h3>
          <p className="text-lg">
            My website have to be online for x date, because my marketing
            campaign will start and I will lose a lot of money If this don’t
            happens.
          </p>
        </div>
      </div>
      <div className="mt-[42px] grid grid-cols-2 items-center gap-[80px]">
        <div>
          <h3 className="text-[22px] mb-6">Traditional Workflow</h3>
          <p className="text-lg">
Code quality decrease not creating automatic testing and creating dirty code to be able to fit the schedule, so create new features become slower and bugs are inevitable. In conclusion, development become slower and website is not ready to publish in time.
          </p>
        </div>
        <InProgress className="h-[364px] w-[100%]" />
      </div>
    </div>
  );
};
