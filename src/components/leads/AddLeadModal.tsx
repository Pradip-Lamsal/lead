import { useState, ChangeEvent } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  contact: string;
  source: string;
  status: string;
  service: string;
  note: string;
}

export function AddLeadModal({ isOpen, onClose }: AddLeadModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    source: '',
    status: '',
    service: '',
    note: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // TODO: Handle form submission
    console.log(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[800px] p-1 overflow-hidden bg-white rounded-full">
        <DialogHeader className="px-4 py-3 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-semibold text-gray-900">Add a New Lead</DialogTitle>
          </div>
        </DialogHeader>

        <div className="px-4 py-5">
          <div className="space-y-4">
            <h3 className="text-base font-medium text-gray-900">Lead Details</h3>
            
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Lead Name</label>
                <Input
                  placeholder="Enter lead name"
                  value={formData.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Contact Number</label>
                <Input
                  placeholder="Enter contact number"
                  value={formData.contact}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('contact', e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Lead Source</label>
                <Select
                  value={formData.source}
                  onValueChange={(value: string) => handleInputChange('source', value)}
                >
                  <SelectTrigger className="border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-b-2transition-all">
                    <SelectValue placeholder="Select lead source" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg">
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="walk-in">Walk-in</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Lead Status</label>
                <Select
                  value={formData.status}
                  onValueChange={(value: string) => handleInputChange('status', value)}
                >
                  <SelectTrigger className="border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-b-2 transition-all">
                    <SelectValue placeholder="Select lead status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg">
                    <SelectItem value="warm">Warm</SelectItem>
                    <SelectItem value="cold">Cold</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                    <SelectItem value="lost">Lost</SelectItem>
                    <SelectItem value="initiated">Initiated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Select
                  value={formData.service}
                  onValueChange={(value: string) => handleInputChange('service', value)}
                >
                  <SelectTrigger className="border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-b-2 transition-all">
                    <SelectValue placeholder="Select interested service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg">
                    <SelectItem value="wedding">Wedding Package</SelectItem>
                    <SelectItem value="portrait">Portrait Session</SelectItem>
                    <SelectItem value="event">Event Coverage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Textarea
                  placeholder="Note"
                  value={formData.note}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('note', e.target.value)}
                  className="border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-b-2 transition-all resize-none min-h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50">
          <Button
            variant="outline"
            onClick={onClose}
            className="h-10 px-6 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="h-10 px-6 text-sm font-medium text-white rounded-lg focus:ring-1"
          >
            Add Lead
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 