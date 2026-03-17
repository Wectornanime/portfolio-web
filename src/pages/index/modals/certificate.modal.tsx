import { Button, Image } from "@heroui/react";
import { Card, CardFooter } from "@heroui/card";
import { Modal, ModalBody, ModalContent } from "@heroui/modal";
import { OpenInNewRounded as OpenInNewRoundedIcon } from "@mui/icons-material";

import { CertificateApiResponseType } from "@/types/api";

interface CertificateModalProps {
  certificate: CertificateApiResponseType | null;
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function CertificateModal({
  certificate,
  isOpen,
  onOpenChange,
}: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {() => (
          <ModalBody className="p-6">
            <Card>
              <Image
                alt={certificate.title}
                className="object-cover"
                radius="sm"
                src={certificate.imageUrl}
                width={"100%"}
              />
              <CardFooter className="absolute justify-center bottom-0 z-10 overflow-hidden">
                <Button
                  as="a"
                  className="text-small text-white bg-black/40"
                  color="default"
                  href={certificate.link}
                  radius="sm"
                  size="sm"
                  target="_blank"
                  variant="flat"
                >
                  <p className="tracking-wide uppercase">Validar código</p>
                  <OpenInNewRoundedIcon fontSize="inherit" />
                </Button>
              </CardFooter>
            </Card>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
