import { settingsState } from '../../../domain/functional-core/SettingsState';
import { saveOrDiscardPresenatation } from './SaveOrDiscardPresentation';

describe('Если данные отправляются', () => {
  const viewState = saveOrDiscardPresenatation(
    settingsState({
      status: 'pending',
    })
  );
  test('На кнопке "Сохранить" индикатор загрузки', () => {
    expect(viewState.save.icon).toBe('pending');
  });
  test('Обе кнопки заблокированы', () => {
    expect(viewState.save.disabled).toBe(true);
    expect(viewState.discard.disabled).toBe(true);
  });
});
