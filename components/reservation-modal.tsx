'use client'
import React from 'react'

const ReservationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            <div className="absolute bottom-6 right-6 pointer-events-auto">
                <div className="w-[320px] bg-gradient-to-b from-orange-400 to-orange-500 rounded-xl shadow-xl p-5 relative">
                    <button
                        onClick={onClose}
                        className="absolute cursor-pointer top-3 right-3 text-white text-xl font-bold"
                        aria-label="Close"
                    >
                        ×
                    </button>

                    <div className="text-center text-white font-semibold tracking-wide mb-4">STANDARD</div>

                    <div className="space-y-3">
                        <div className="bg-orange-300 rounded-md px-4 py-2 text-white flex justify-between items-center">
                            <span>Personen</span>
                            <span>2 Personen</span>
                        </div>
                        <div className="bg-orange-300 rounded-md px-4 py-2 text-white flex justify-between items-center">
                            <span>Datum</span>
                            <span>24. Juli</span>
                        </div>
                        <div className="bg-orange-300 rounded-md px-4 py-2 text-white flex justify-between items-center">
                            <span>Zeit</span>
                            <span>17:00</span>
                        </div>
                    </div>

                    <button className="w-full mt-4 bg-white text-orange-600 rounded-md py-2 font-semibold relative">
                        RESERVIERUNGEN ANZEIGEN
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
                    </button>

                    <p className="text-white text-sm mt-4 text-center opacity-80">
                        Haben Sie einen Geschenkgutschein erhalten?
                    </p>

                    <div className="grid grid-cols-2 mt-4 gap-2 text-sm font-medium">
                        <button className="bg-white text-orange-600 py-2 rounded-md">RESERVIEREN</button>
                        <button className="bg-white text-orange-600 py-2 rounded-md">GUTSCHEIN KAUFEN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationModal;
