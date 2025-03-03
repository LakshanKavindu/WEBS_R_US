import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

const Interactions = () => {
  const [formData, setFormData] = useState({
    interactionId: "",
    interactionMedia: "",
    name: "",
    phoneNumber: "",
    purpose: "",
    typeOfInquiry: "",
    description: "",
    status: "",
    escalateTo: "",
    staffName: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <PageHeader />
      <div className="px-16 mt-6 w-full">
        <div className="flex items-center gap-8 flex-wrap w-full mb-6 ">
          <div className="flex flex-col">
            <label htmlFor="interactionId" className="text-xs font-semibold">
              Interaction ID
            </label>
            <input
              type="text"
              name="interactionId"
              placeholder="Interaction ID"
              className="border border-1 rounded-sm px-2 py-1 max-w-[300px] min-w-[200px]"
              value={formData.interactionId}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="interactionMedia" className="text-xs font-semibold">
              Interaction Media
            </label>
            <select
              id="interactionMedia"
              name="interactionMedia"
              className="border border-1 rounded-sm px-2 py-1 max-w-[300px] min-w-[200px]"
              value={formData.interactionMedia}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="call">Call</option>
              <option value="sms">SMS</option>
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="verbally">Verbally</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-8 flex-wrap w-full mb-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xs font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-1 rounded-sm px-2 py-1 max-w-[300px] min-w-[200px]"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-xs font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="border border-1 rounded-sm px-2 py-1 max-w-[300px] min-w-[200px]"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex items-center gap-8 flex-wrap w-full mb-6">
          <div className="flex flex-col">
            <label htmlFor="purpose" className="text-xs font-semibold">
              Purpose
            </label>
            <select
              id="purpose"
              name="purpose"
              className="border border-1 rounded-sm px-2 py-1 max-w-[300px] min-w-[200px]"
              value={formData.purpose}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="newInquiry">New Inquiry</option>
              <option value="existingInquiry">Existing Inquiry</option>
              <option value="complaint">Complaint</option>
              <option value="other">Other</option>
            </select>
          </div>
          {formData.purpose && (
            <div className="flex flex-col">
              <label htmlFor="typeOfInquiry" className="text-xs font-semibold">
                Type Of Inquiry
              </label>
              <select
                id="typeOfInquiry"
                name="typeOfInquiry"
                className="border border-1 rounded-sm px-2 py-1 max-w-[300px] min-w-[200px]"
                value={formData.typeOfInquiry}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                {formData.purpose === "newInquiry" && (
                  <>
                    <option value="newBooking">New Booking</option>
                    <option value="quickQuote">Quick Quote</option>
                    <option value="pricingInformation">
                      Pricing Informations
                    </option>
                    <option value="taxInformation">Tax Informations</option>
                  </>
                )}

                {formData.purpose === "existingInquiry" && (
                  <>
                    <option value="existingBooking">Existing Booking</option>
                    <option value="existingQuote">Existing Quote</option>
                    <option value="existingInformations">
                      Existing Informations
                    </option>
                    <option value="existingtax">
                      Existing Tax Informations
                    </option>
                  </>
                )}

                {formData.purpose === "complaint" && (
                  <>
                    <option value="booking">Booking</option>
                    <option value="quote">Quote</option>
                    <option value="pricingInformationComplaint">
                      Pricing Informations
                    </option>
                    <option value="taxInformationComplaint">
                      Tax Informations
                    </option>
                  </>
                )}
                <option value="other">Other</option>
              </select>
            </div>
          )}
        </div>

        <div className="mb-6">
          <textarea
            name="description"
            placeholder="description"
            className="border border-1 rounded-sm px-2 py-1 w-[300px] md:w-[500px]  h-[40px]"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        {formData.purpose === "newInquiry" && (
          <div className="mb-6">
            <button
              type="button"
              className="bg-orange-500 text-white px-8 py-1 font-semibold rounded-sm cursor-pointer hover:bg-orange-600 transition-all ease-in-out"
            >
              Add new
            </button>
          </div>
        )}

        <div className="flex items-center gap-8 flex-wrap w-full mb-6">
          <div className="flex flex-col">
            <label htmlFor="status" className="text-xs font-semibold">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="border border-1 rounded-sm px-2 py-1 max-w-[300px] min-w-[200px]"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="resolved">Resolved</option>
              <option value="inProgress">In-progress</option>
              <option value="escalate">Escalate</option>
            </select>
          </div>
          {formData.status === "escalate" && (
            <>
          <div className="flex flex-col">
            <label htmlFor="escalateTo" className="text-xs font-semibold">
              Escalate To
            </label>
            <select
              id="escalateTo"
              name="escalateTo"
              className="border border-1 rounded-sm px-2 py-1 max-w-[300px] min-w-[200px]"
              value={formData.escalateTo}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="ceo">CEO</option>
              <option value="director">Director</option>
              <option value="adminAssitant">Admin Assistant</option>
              <option value="accountantAU">Accountant AU</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="staffName" className="text-xs font-semibold">
              Staff Name
            </label>
            <input
              type="text"
              name="staffName"
              placeholder="Staff Name"
              className="border border-1 rounded-sm px-2 py-1 max-w-[300px] min-w-[200px]"
              value={formData.staffName}
              onChange={handleChange}
            />
          </div>
          </>
          )}
        </div>

        <div className="flex items-center gap-8 flex-wrap w-full mb-6">
          <div className="mb-6">
            <textarea
              name="comment"
              placeholder="comment"
              className="border border-1 rounded-sm px-2 py-1 w-[300px] md:w-[500px] h-[40px] max"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-end w-full mb-6">
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-orange-600 transition-all ease-in-out"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interactions;
