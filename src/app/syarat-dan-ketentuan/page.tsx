import { ClientRedirect } from '../../components/layout/ClientRedirect';
import { toLocalizedPath } from '../../utils/i18nRouting';

export default function LegacyTermsPath() {
  return <ClientRedirect href={toLocalizedPath('/syarat-ketentuan', 'id')} />;
}
