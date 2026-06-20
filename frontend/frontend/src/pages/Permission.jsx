import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function Permission() {
  const [rollNumber, setRollNumber] = useState("");
  const [paid, setPaid] = useState(false);
  const [slip, setSlip] = useState(null);

  // STEP 1: FAKE PAYMENT
  const handlePayment = () => {
    if (!rollNumber) {
      toast.error("Enter Roll Number first");
      return;
    }

    toast.info("Redirecting to payment gateway...");

    setTimeout(() => {
      toast.success("Payment of ₹10 successful 💰");
      setPaid(true);
    }, 1500);
  };

  // STEP 2: GENERATE SLIP
  const generateSlip = () => {
    if (!paid) {
      toast.error("Please complete payment first");
      return;
    }

    toast.info("Generating permission slip... ⏳");

    const now = new Date();

    const issueTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const expiry = new Date(now.getTime() + 60 * 60 * 1000);

    const expiryTime = expiry.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const data = {
      rollNumber,
      issueTime,
      expiryTime,
      date: now.toLocaleDateString(),
    };

    setTimeout(() => {
      setSlip(data);
      toast.success("Permission slip generated!");
    }, 1500);
  };

  // DOWNLOAD
  const downloadSlip = () => {
    const content = `
IDEase Permission Slip

Roll Number: ${slip.rollNumber}
Issue Time: ${slip.issueTime}
Expiry Time: ${slip.expiryTime}
Date: ${slip.date}
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `permission-slip-${slip.rollNumber}.txt`;
    a.click();
  };

  return (
    <div className="permission-page">

      <ToastContainer />

      <div className="permission-card">

        <h2>Permission Slip Generator 📄</h2>

        <input
          type="text"
          placeholder="Enter Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />

        {/* PAYMENT BUTTON */}
        <button onClick={handlePayment}>
          Pay ₹10
        </button>

        {/* GENERATE BUTTON */}
        <button onClick={generateSlip} disabled={!paid}>
          Generate Slip
        </button>

        {slip && (
          <div className="slip">

            <h3>IDEase Permission Slip</h3>

            <p><b>Roll No:</b> {slip.rollNumber}</p>
            <p><b>Issue Time:</b> {slip.issueTime}</p>
            <p><b>Expiry Time:</b> {slip.expiryTime}</p>
            <p><b>Date:</b> {slip.date}</p>

            <div className="slip-buttons">
              <button onClick={downloadSlip}>Download</button>
              <button onClick={() => window.print()}>Print</button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default Permission;