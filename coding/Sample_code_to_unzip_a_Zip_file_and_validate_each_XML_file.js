import StreamZip from 'node-stream-zip';
import validator from 'xsd-schema-validator';

export interface ValidationResult {
  valid: boolean;
  result: string;
  messages: Array<string>;
};

const validateXML = (xmlString: string): Promise<ValidationResult> => {
  return new Promise((resolve) => 
  validator.validateXML(xmlString, './xml/HighSchoolTranscript_v1.3.0.xsd', function(err, result) {
    result.valid = !err;
    result.result = xmlString;
    resolve(result);
  })); 
}

export const unzipFile = async (fileName: string): Promise<Array<ValidationResult>> => {
  const zip = new StreamZip.async({
    file: fileName,
    storeEntries: true,
  });

  const entriesCount = await zip.entriesCount;
  console.log(`Entries read: ${entriesCount}`);
  
  const entries = await zip.entries();
  const promises: Array<Promise<ValidationResult>> = [];
  for (const entry of Object.values(entries)) {
    const buffer = await zip.entryData(entry.name);

    let xmlString = buffer?.toString() || '';
    promises.push(validateXML(xmlString));
  }

  const results: Array<ValidationResult> = await Promise.all(promises);
  await zip.close();
  return results;
};
