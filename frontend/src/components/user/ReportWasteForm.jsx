import React, { useState } from 'react';
import { ReportIcon } from '../common/Icons';
import { ReportType } from '../../constants';

const ReportWasteForm = () => {
  const [reportType, setReportType] = useState(ReportType.UNCOLLECTED);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [message, setMessage] = useState('');

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call with form data
    console.log({ reportType, location, description, photo: photo?.name });
    setMessage('Your report has been submitted successfully. Thank you for your help!');
    // Reset form
    setReportType(ReportType.UNCOLLECTED);
    setLocation('');
    setDescription('');
    setPhoto(null);
    setPhotoPreview(null);
    setTimeout(() => setMessage(''), 5000);
  };

  return (
    <div className="max-w-2xl mx-auto">
        <div className="bg-surface rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
                 <div className="bg-orange-100 p-3 rounded-full">
                    <ReportIcon className="h-8 w-8 text-accent" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Report an Issue</h2>
                    <p className="text-gray-500">Help us keep the city clean by reporting issues.</p>
                </div>
            </div>

            {message && (
                <div className="bg-green-100 border-l-4 border-primary text-green-700 p-4 mb-6" role="alert">
                    <p>{message}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Report
                    </label>
                    <div className="flex gap-4">
                        <button type="button" onClick={() => setReportType(ReportType.UNCOLLECTED)} className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all ${reportType === ReportType.UNCOLLECTED ? 'bg-primary text-white border-primary' : 'bg-gray-100 border-gray-200'}`}>{ReportType.UNCOLLECTED}</button>
                        <button type="button" onClick={() => setReportType(ReportType.ILLEGAL_DUMP)} className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all ${reportType === ReportType.ILLEGAL_DUMP ? 'bg-primary text-white border-primary' : 'bg-gray-100 border-gray-200'}`}>{ReportType.ILLEGAL_DUMP}</button>
                    </div>
                </div>

                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location / Address
                    </label>
                    <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required placeholder="e.g., 123 Main St, Ikeja" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} required placeholder="Provide details about the issue..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>

                <div>
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                        Upload Photo (Optional)
                    </label>
                    <input type="file" id="photo" onChange={handlePhotoChange} accept="image/*" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-primary hover:file:bg-green-100" />
                    {photoPreview && <img src={photoPreview} alt="Preview" className="mt-4 rounded-lg h-40 w-auto object-cover" />}
                </div>

                <button type="submit" className="w-full px-4 py-3 font-semibold text-white bg-accent rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300">
                    Submit Report
                </button>
            </form>
        </div>
    </div>
  );
};

export default ReportWasteForm;