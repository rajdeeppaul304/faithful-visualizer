import React from "react";

const TermsConditions = () => (
  <div className="max-w-5xl mx-auto py-12 px-4 libertinus-sans-regular">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#36454F] leading-tight">
      Terms & Conditions
    </h1>

    <h2 className="text-2xl font-semibold mt-8 mb-3 text-[#36454F]">
      Galaxies Photography and Film Productions
    </h2>

    <div className="space-y-8 text-lg md:text-xl text-[#506270] leading-relaxed">
      {/* 1. Fees & Payment */}
      <div>
        <h3 className="text-[#36454F] mb-2">1. Fees & Payment</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>A non-refundable deposit is required to secure your booking.</li>
          <li>
            The remaining balance is payable on the day of the photoshoot, either in cash or via the same payment method used for the deposit.
          </li>
          <li>
            Our package fees include photography, videography (if chosen), and editing services only. Personal expenses such as travel, accommodation, food, location entry tickets, or other incidentals are not included and are the client’s responsibility.
          </li>
        </ul>
      </div>

      {/* 2. Cancellation & Rescheduling */}
      <div>
        <h3 className="text-[#36454F] mb-2">2. Cancellation & Rescheduling</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <b>Cancellation:</b> All deposits are non-refundable. If Galaxies Photography and Film Productions must cancel for any reason, the full deposit will be refunded. If you cancel, the deposit will be retained regardless of notice period.
          </li>
          <li>
            <b>Rescheduling:</b>
            <ul className="list-disc ml-6 space-y-1">
              <li>Requests must be made well in advance and are subject to availability.</li>
              <li>Postponing is allowed only up to 3 months from the original shoot date.</li>
              <li>If we are unavailable on the new date, the deposit remains non-refundable.</li>
            </ul>
          </li>
          <li>
            <b>Package Downgrade:</b> Once booked, packages cannot be downgraded. Reducing deliverables, shoot hours, or locations is not allowed. The full package amount still applies.
          </li>
        </ul>
      </div>

      {/* 3. Delivery Timeline */}
      <div>
        <h3 className="text-[#36454F] mb-2">3. Delivery Timeline</h3>
        <p>
          Final deliverables follow the workflow below. Delays in sharing your selections or music may extend delivery times.
        </p>
      </div>

      {/* 4. Workflow */}
      <div>
        <h3 className="text-[#36454F] mb-2">4. Workflow</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>RAW photos shared via Google Drive on shoot day after full payment.</li>
          <li>Select your preferred images based on your package (typically 50–60 photos).</li>
          <li>Edited photos delivered within 2 weeks of receiving selections.</li>
          <li>Edited video delivered within 5–6 weeks of receiving your music preference.</li>
        </ol>
      </div>

      {/* 5. Location Permissions */}
      <div>
        <h3 className="text-[#36454F] mb-2">5. Location Permissions & Permits</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Clients are responsible for obtaining and paying for shooting permissions or location fees.</li>
          <li>We can assist in arranging these, but final responsibility lies with the client.</li>
          <li>Permission fees may change before the shoot date; any increase must be covered by the client.</li>
        </ul>
      </div>

      {/* 6. Unforeseen Situations */}
      <div>
        <h3 className="text-[#36454F] mb-2">6. Unforeseen Situations</h3>
        <p>
          If a location is crowded, closed, or impacted by weather, construction, or regulations, this will not affect the final cost. We will adapt creatively.
        </p>
      </div>

      {/* 7. Additional Services */}
      <div>
        <h3 className="text-[#36454F] mb-2">7. Additional Services</h3>
        <p>
          Any additional services beyond the agreed package (e.g., drone shots, extra edits, reels) will incur extra charges, discussed and invoiced beforehand.
        </p>
      </div>

      {/* 8. Data Storage */}
      <div>
        <h3 className="text-[#36454F] mb-2">8. Data Storage</h3>
        <p>
          All RAW files are shared for selection purposes. After editing and delivery, RAW files are retained for a few weeks for any requested changes, then permanently deleted. Edited files are retained for 6 months — please download and back them up promptly.
        </p>
      </div>
    </div>
  </div>
);

export default TermsConditions;
