import React from "react";

const FAQ = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 libertinus-sans-regular">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#36454F] leading-tight">
      Frequently Asked Questions
    </h1>
    <div className="space-y-8 text-lg md:text-xl text-[#506270] mb-6 leading-relaxed">
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          When is the final payment due?
        </h2>
        <p>
          On the day of the shoot, before receiving the RAW files. Payment can be made in cash or via your original method.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          Is my deposit refundable if I cancel?
        </h2>
        <p>
          No. The deposit is non-refundable under all circumstances unless the cancellation is made by us.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          Can I reschedule my shoot later?
        </h2>
        <p>
          Yes, but only within 3 months of your original date. We’ll try to accommodate, but it's subject to availability.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          Can I reduce or change my selected package later?
        </h2>
        <p>
          You can upgrade, but downgrades are not allowed after confirmation.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          Are travel and permissions included in the cost?
        </h2>
        <p>
          No, personal travel, stay, food, and location permissions are not included and must be covered by the client.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          When will I get the final photos and video?
        </h2>
        <ul className="list-disc ml-6 text-[#506270]">
          <li><b>RAW photos:</b> same day of shoot (post payment)</li>
          <li><b>Edited photos:</b> within 2 weeks after you send selections</li>
          <li><b>Edited video:</b> within 5–6 weeks after receiving your music choice</li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          What happens if a location is unexpectedly shut or too crowded?
        </h2>
        <p>We’ll work around it creatively, but it won’t affect the agreed fees.</p>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          Can I request additional edits or services later?
        </h2>
        <p>Yes. Additional requests are welcomed but will incur extra charges as discussed.</p>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          Do you help with photo selection?
        </h2>
        <p>Yes! We can guide you if needed. Once RAW files are shared, take your time with your selections.</p>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          How long do you retain our data?
        </h2>
        <p>
          As part of our workflow, we provide you with all the RAW photo files for final selection. Once you've made your selections, we begin the editing process. After delivering the edited images, we retain the RAW files for a few additional weeks in case any revisions are needed. Once all changes are finalized and confirmed, the RAW data is permanently deleted a few days after final delivery.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-xl mb-1 text-[#36454F] leading-tight">
          Do you offer any revisions on the edited photos or video?
        </h2>
        <p>Yes, we do offer limited revisions to ensure you’re happy with the final output.</p>
        <ul className="list-disc ml-6 text-[#506270]">
          <li>
            <b>Photos:</b> If there's anything specific you'd like adjusted, we’re happy to accommodate one round of revision. Please note that the changes must fall within the original scope of editing agreed upon.
          </li>
          <li>
            <b>Video:</b> You may share any specific sections of the video you’d like us to revise—whether it’s a clip, transition, or flow. We request that you send all your feedback at once, clearly outlining the changes. We allow up to two rounds of revisions for video edits. This includes:
            <ul className="list-disc ml-6">
              <li>The first round based on your consolidated feedback.</li>
              <li>The second round (if needed), in case the revised version still requires adjustment.</li>
            </ul>
          </li>
        </ul>
        <p className="mt-2">
          Additional revisions beyond this scope may incur extra charges, depending on the nature and complexity of the request.
        </p>
      </div>
    </div>
  </div>
);

export default FAQ;
