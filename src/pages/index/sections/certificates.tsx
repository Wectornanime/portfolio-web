import { Card, Image, useDisclosure } from "@heroui/react";
import { useState } from "react";

import { Section } from "../components/section";
import CertificateModal from "../modals/certificate.modal";

import { CertificateApiResponseType } from "@/types/api";

interface CertificatesSectionProps {
  content: CertificateApiResponseType[];
}

export default function CertificatesSection({
  content,
}: CertificatesSectionProps) {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateApiResponseType | null>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpen = (certificate: CertificateApiResponseType) => {
    setSelectedCertificate(certificate);
    onOpen();
  };

  return (
    <>
      <Section>
        <h3 className="text-xl mb-3 pl-6">Certificados</h3>
        <div className="group flex flex-wrap justify-center gap-4">
          {content.map((certificate) => (
            <Card
              key={certificate.id}
              className="border-none cursor-pointer hover:scale-110"
              radius="sm"
            >
              <Image
                alt={certificate.title}
                className="object-cover"
                height={140}
                radius="sm"
                src={certificate.imageUrl}
                width={210}
                onClickCapture={() => handleOpen(certificate)}
              />
            </Card>
          ))}
        </div>
      </Section>

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
