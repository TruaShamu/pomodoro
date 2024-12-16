import React, { useState, useEffect } from "react";

const SettingModal = ({ focusDuration, setFocusDuration, breakDuration, setBreakDuration }) => {
    const [showModal, setShowModal] = useState(false);

    const handleFocusDurationChange = (e) => {
        setFocusDuration(e.target.value);
    };

    const handleBreakDurationChange = (e) => {
        setBreakDuration(e.target.value);
    };

    return (
        <div>
            <button className="px-4 py-2 rounded-md bg-gray-500 text-white mt-4 hover:bg-opacity-80" onClick={() => setShowModal(true)}>Settings</button>
            {showModal && (
                <div role="dialog" className="fixed top-0 left-0 w-full h-full bg-white  flex items-center justify-center ">
                    <div>
                        <label htmlFor="focusDuration" class="block text-sm/6 font-medium text-gray-900">Focus Duration</label>
                        <input
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            type="number"
                            id="focusDuration"
                            value={focusDuration}
                            onChange={handleFocusDurationChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="breakDuration" class="block text-sm/6 font-medium text-gray-900">Break Duration</label>
                        <input
                            type="number"
                            id="breakDuration"
                            class= "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            value={breakDuration}
                            onChange={handleBreakDurationChange}
                        />
                    </div>
                    <button className="px-4 py-2 rounded-md bg-gray-500 text-white mt-4 hover:bg-opacity-80" onClick={() => setShowModal(false)}>Save</button>
                    <button className="px-4 py-2 rounded-md bg-gray-500 text-white mt-4 hover:bg-opacity-80" onClick={() => setShowModal(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default SettingModal;