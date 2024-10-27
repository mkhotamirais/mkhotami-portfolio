import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Project } from "@/lib/projects";
import { Badge } from "../ui/badge";

export type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: Project;
};

export default function Modal({ open, setOpen, item }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription>{item.description}</DialogDescription>
          <div className="flex flex-wrap gap-1">
            {item.tools.map((itm, i) => (
              <div key={i}>
                <Badge key={i}>{itm}</Badge>
              </div>
            ))}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
